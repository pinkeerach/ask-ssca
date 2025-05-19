function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (!userText) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  input.value = "";

  callChatGPT(userText)
    .then(response => {
      chatBox.innerHTML += `<div><strong>HAL-PINKY:</strong> ${response}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
      chatBox.innerHTML += `<div><strong>HAL-PINKY:</strong> Error contacting ChatGPT API: ${error.message}</div>`;
    });
}

function callChatGPT(prompt) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer INSERT_API_TOKEN_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4.1-nano",
      messages: [
        { role: "system", content: "You are HAL-PINKY, an assistant helping SSCA members with cruising questions." },
        { role: "user", content: prompt }
      ]
    })
  })
  .then(res => {
    console.log("Raw response object:", res);
    return res.json();
  })
  .then(data => {
    console.log("Parsed JSON response:", data);
    return data.choices[0].message.content;
  });
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

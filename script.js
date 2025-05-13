function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (!userText) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  input.value = "";

  // Simulate HAL-PINKY response (stubbed logic)
  setTimeout(() => {
    let response = "I'm HAL-PINKY. I’ve received your SSCA-related question. Please hold while I query available data.";
    const lc = userText.toLowerCase();

    if (lc.includes("caribbean")) {
      response = "Currently, no active customs alerts in the Caribbean. Grenada and Martinique are reporting clear check-ins.";
    } else if (lc.includes("visa")) {
      response = "French Polynesia visa extensions remain limited to 90 days unless pre-approved.";
    } else if (lc.includes("membership") || lc.includes("join ssca") || lc.includes("benefits")) {
      response = "SSCA Membership includes access to monthly bulletins, cruising station support, online webinars, and a global network of experienced cruisers. You can join at https://ssca.org/join to get started.";
    }

    chatBox.innerHTML += `<div><strong>HAL-PINKY:</strong> ${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
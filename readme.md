# Ask SSCA Readme
This repository holds the prototype UI for chatgpt integration for the SSCA-trained ChatGPT setup. 

## ChatGPT Integration
You will need an API key of your own to use in this prototype. 

To get the API token, you will need to register your account with the API Platform side of ChatGPT. Once you have signed up for their API Platform product, you can get an API key from the [API dashboard](https://platform.openai.com/api-keys).

In the script.js file, search for INSERT_API_TOKEN_HERE and replace it with your API token from the ChatGPT API interface.

## Basic Setup
The simplest way to get this running locally is to setup an HTTP server of your choosing. 

The most basic option is [HTTP-server](https://github.com/http-party/http-server) which I installed on my macOS with homebrew.

Then configure your dev environment to load this basic web page into that webserver. I use Visual Studio and have a very basic debug config that points to http://localhost:8080 for tinkering with this project.
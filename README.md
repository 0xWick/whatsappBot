# WhatsApp Bot (JavaScript)

## Introduction

This is a WhatsApp bot implemented in JavaScript, designed to automate certain tasks on WhatsApp. The main file for this bot is `bot.js`. Please note that this bot is built for educational and experimental purposes and may not be suitable for production use.

## Special Requirement

To ensure compatibility with this bot, you must downgrade your npm version to `6.14.18`.

# WhatsApp Bot (JavaScript)

This is a JavaScript-based WhatsApp bot that performs various functions in response to specific commands. Here's a brief description of what the code does:

## Main Features

1. **Help Command**: Easily retrieve a list of available commands by sending `!Help`.

2. **Ping Pong Command**: Test the service's responsiveness with the `!ping` command, and the bot will respond with `pong`.

3. **Google Search Command**: Initiate a Google search within WhatsApp by using commands such as `!google` or `!Google`. The bot will send a screenshot of the search results.

4. **Youtube Search Command**: Search for YouTube videos directly in WhatsApp with the `!YoutubeSearch` command. Receive titles and links of the search results, along with a screenshot of the first page.

5. **Youtube Download Command**: Download YouTube videos using the `!YoutubeDownload` command, and the bot will send the downloaded video as a message.

6. **Meme Command**: Lighten the mood with the `!Meme` command, which fetches a random meme from 'meme-api.herokuapp.com' and shares it in the chat.

7. **Joke Command**: Enjoy a good laugh with the `!Joke` command. The bot fetches jokes from the 'jokeapi.dev' API and sends them in two parts, setup and delivery, as separate messages.

These features are powered by various libraries, including 'puppeteer,' 'axios,' and 'whatsapp-web.js,' enabling the bot to interact with WhatsApp and provide a range of functionalities. Make sure to customize any paths, URLs, or specific configurations to match your environment and requirements when implementing this WhatsApp bot.

## Getting Started

### Prerequisites

Before running the bot, you need to have the following prerequisites installed:

- Node.js
- npm (downgraded to version 6.14.18 as per the special requirement)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies.

### Configuration

1. Open the `bot.js` file and modify the configuration variables to suit your needs. You may need to provide your WhatsApp credentials, API keys, or any other required configurations.
2. Customize the bot's behavior by modifying the code in `bot.js` according to your requirements.

### Usage

1. Run the bot.
2. The bot will start and connect to WhatsApp.
3. Start sending and receiving messages using the bot.

![image](https://github.com/0xWick/whatsappBot/assets/69587947/a8d64a36-8ada-4aa2-929d-5f9c9bcae37e)

## Disclaimer

This WhatsApp bot is for educational and experimental purposes only. Be aware that automating WhatsApp may violate their terms of service, and your WhatsApp account could be banned if you misuse this bot. Use it responsibly and at your own risk.

## Support and Contributions

For any questions, issues, or contributions, please feel free to create an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the MIT License. Feel free to modify and distribute it in accordance with the terms of the license.

Happy botting! 🤖📱

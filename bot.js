const qrcode = require('qrcode-terminal');
const puppeteer = require('puppeteer');
const path = require('path'); // Import the path module

const axios = require("axios")


const { Client, MessageMedia } = require('whatsapp-web.js');

const fs = require("fs")


// * Commands Modules
const { youtubeIt } = require("./youtubeLink")
const { youtubeDownload } = require("./youtubeDownload")

const { googleIt } = require("./google")

const client = new Client({
    puppeteer: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    }
})


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Help - Get All Commands
client.on('message', message => {
    if (message.body === '!Help') {
        client.sendMessage(message.from, 'Help Commands');
    }
});

// * Command
// * Ping Pong
// Testing the service working
client.on('message', message => {
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
});

// * Command
// * Google Search
// Send Screenshot of Google Search
client.on('message', async (message) => {
    if (message.body.includes("!google") || message.body.includes("!Google")) {

        // * Google it and Take Screenshot
        const screenshot = await googleIt(message.body)

        // Convert the image buffer to a base64-encoded string
        const base64Image = screenshot.toString('base64');

        const media = new MessageMedia('image/png', base64Image);

        const chat = await message.getChat()
        chat.sendMessage(media, { caption: 'Google Search Result First Page' });

    }
});

// Send Video
client.on('message', async (message) => {
    if (message.body.includes("!Spain")) {

        // Get the Video from Local
        const videoPath = 'Spain.mp4'; // Replace with the actual path to your video
        const media = MessageMedia.fromFilePath(videoPath);

        const chat = await message.getChat()
        console.log("Sending Video...")
        await chat.sendMessage(media, { caption: 'Youtube Video' });
        console.log("Video Sent!")
    }
});

// Youtube Search
client.on('message', async (message) => {
    if (message.body.includes("!YoutubeSearch")) {

        // * Google it and Take Screenshot
        const { TitlesAndLinks, Screenshot } = await youtubeIt(message.body)

        const chat = await message.getChat()

        // Send Links
        await chat.sendMessage(TitlesAndLinks);

        // Send Page Screenshot
        // Convert the image buffer to a base64-encoded string
        const base64Image = Screenshot.toString('base64');

        const media = new MessageMedia('image/png', base64Image);

        chat.sendMessage(media, { caption: 'Youtube Search Result First Page' });
    }
});

// Youtube Download
client.on('message', async (message) => {
    if (message.body.includes("!YoutubeDownload")) {

        const chat = await message.getChat()

        // Request Video Download
        // Wait for video download
        
        await youtubeDownload(message.body)
        console.log("Video Downloaded!")

        // Get the Video from Local
        const videoPath = 'youtubeVideo.mp4'; // Replace with the actual path to your video
        const media = MessageMedia.fromFilePath(videoPath);

        console.log("Sending Video...")
        await chat.sendMessage(media, { caption: 'Youtube Video' });
        console.log("Video Sent!")

    }
});

// Fun Commands
client.on('message', async (message) => {
    if (message.body.includes("!Meme")) {

        const meme = await axios("https:meme-api.herokuapp.com/gimme")

        client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url));
    }
});

client.on('message', async (message) => {
    if (message.body.includes("!Joke")) {
        const joke = await axios("https://v2.jokeapi.dev/joke/Any?safe-mode")

        const jokeMsg = await client.sendMessage(message.from, joke.setup)

        if (joke.delivery) setTimeout(function () { jokeMsg.reply(joke.delivery) }, 5000)

    }
});


client.initialize();


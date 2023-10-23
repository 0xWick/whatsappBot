const puppeteer = require('puppeteer');
const path = require('path'); // Import the path module

const {parseQuery} = require("./utilityFunctions")


// Returns Screenshot Buffer
async function googleIt(user_query) {

    const query = await parseQuery(user_query)

    // Create a browser instance
    const browser = await puppeteer.launch({headless: "new"});

    // Create a new page
    const page = await browser.newPage();

    // Set viewport width and height
    await page.setViewport({ width: 1920, height: 1080 });

    // Open URL in current page
    await page.goto(`https://www.google.com/search?q=${query}`, { waitUntil: 'networkidle0' });

    // Define the output path using __dirname
    const outputDir = __dirname; // Get the current directory
    const outputPath = path.join(outputDir, 'screenshot.jpg');

    // Capture screenshot
    const screenshot = await page.screenshot({
        path: outputPath,
    });

    // Close the browser instance
    await browser.close();

    return screenshot
}


module.exports = {googleIt}
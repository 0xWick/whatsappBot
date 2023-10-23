const puppeteer = require('puppeteer');
const path = require('path');

const {parseQuery} = require("./utilityFunctions")


async function captureScreenshot(page) {

    // Set the viewport size to 1920x1080 (Full HD)
  await page.setViewport({ width: 1920, height: 1080 });

  // Capture a screenshot and save it with the provided title
  const screenshotPath = path.join(__dirname, `youtubeScreenshot.png`);
  const screenshot = await page.screenshot({ path: screenshotPath});

  return screenshot
}

async function getLinksAndTitles(page) {
  // Extract video URLs and titles for the first 5 videos
  const videoInfo = await page.evaluate(() => {
    const results = [];
    const videoElements = document.querySelectorAll('h3 > a');
    
    for (let i = 0; i < 5 && i < videoElements.length; i++) {
      const element = videoElements[i];
      results.push({
        title: element.textContent,
        url: element.getAttribute('href'),
      });
    }

    return results;
  });

  return videoInfo;
}

async function youtubeIt(user_query) {
  const query = await parseQuery(user_query);

  // Launch a headless browser
  const browser = await puppeteer.launch({headless: "new"});

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the YouTube search results page
  const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;
  await page.goto(youtubeUrl, { waitUntil: 'networkidle0' });

  // Extract video information
  const videoInfo = await getLinksAndTitles(page);

  // Capture screenshots for each video
  const Screenshot = await captureScreenshot(page);

  // Create a formatted string with the video information
  const TitlesAndLinks = videoInfo.map((video) => {
    return `Title: ${video.title}\nURL: https://www.youtube.com${video.url}\n---`;
  }).join('\n');

  // Close the browser when done
  await browser.close();
  console.log(Screenshot)
  // Send text to User
  return {TitlesAndLinks, Screenshot}
}


module.exports = {youtubeIt}
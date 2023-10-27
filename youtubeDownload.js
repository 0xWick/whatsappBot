const fs = require('fs');
const ytdl = require('ytdl-core');

// Define a function for downloading a YouTube video
async function youtubeDownload(user_query) {
  try {
    const parts = user_query.split(" ");
    parts.shift();

    const url = parts[0];
    const videoPath = 'youtubeVideo.mp4'; // Define the path where you want to save the video

    console.log("Downloading Video...");

    // Download the video using ytdl-core
    const videoStream = ytdl(url, {quality: "lowest"});

    videoStream.pipe(fs.createWriteStream(videoPath));

    return new Promise((resolve, reject) => {
      videoStream.on('end', () => {
        console.log("Video Downloaded!");
        resolve(videoPath);
      });

      videoStream.on('error', (error) => {
        console.error("Error downloading video:", error);
        reject(error);
      });
    });
  } catch (error) {
    console.error("Error while downloading video:", error);
    throw error;
  }
}
// async function main() {

//   const result = await youtubeDownload("!YoutubeDownload https://www.youtube.com/watch?v=nqUN530Rgtw&pp=ygUTU3VtbWVyIGhpZ2ggRGhpbGxvbg%3D%3D")
//   console.log("Result:")
//   console.log(result)
// }

// main()


module.exports = { youtubeDownload };

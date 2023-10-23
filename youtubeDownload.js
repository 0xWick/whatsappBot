const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above


async function youtubeDownload(user_query) {

  const parts = user_query.split(" ");
  parts.shift()

  const url = parts[0]
  
  console.log("Downloading Video...")

  const result = ytdl(url).pipe(fs.createWriteStream('youtubeVideo.mp4')).on("finish", () => {return true})

}

youtubeDownload("!YoutubeDownload https://www.youtube.com/watch?v=c20XsM9BWEM&pp=ygUSU3BhaW4gUHVuamFiaSBTb25n")

module.exports = {youtubeDownload}
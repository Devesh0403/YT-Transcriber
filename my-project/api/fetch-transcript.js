// // server.js
// import express from "express";
// import cors from 'cors';
// import { YoutubeTranscript } from 'youtube-transcript';
// import ytdl from "ytdl-core"


// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.get('/', function (req, res)  {
//     res.send("done")
// });


// app.get('/fetch-transcript', async (req, res) => {
//     const { videoId } = req.query;
//     try {
//         const transcript = await YoutubeTranscript.fetchTranscript(videoId); 
//         console.log(transcript);
//         res.json(transcript);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
// // app.get('/video-info', async (req, res) => {
// //     const { videoId } = req.query;
// //     try {
// //         const info = await ytdl.getInfo(videoId);
// //         res.json({ title: info.videoDetails.title });
// //     } catch (error) {
// //         res.status(500).send('Error fetching video info');
// //     }
// // });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// import { YoutubeTranscript } from 'youtube-transcript';
// import ytdl from 'ytdl-core';

// export default async function handler(req, res) {
//   const { videoId } = req.query;

//   if (req.method === 'GET') {
//     try {
//       const transcript = await YoutubeTranscript.fetchTranscript(videoId);
//       res.status(200).json(transcript);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


import { YoutubeTranscript } from 'youtube-transcript';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  const { videoId } = req.query;
  if (!videoId) {
    return res.status(400).json({ error: 'Missing videoId parameter' });
  }

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    return res.status(200).json(transcript);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/videos', (req, res) => {
  // Mock video data
  const videos = Array(12).fill().map((_, index) => ({
    id: `video${index + 1}`,
    title: `Video Title ${index + 1}`,
    channel: `Channel Name ${index + 1}`,
    views: `${Math.floor(Math.random() * 1000)}K views`,
    timestamp: `${Math.floor(Math.random() * 10)} days ago`,
    thumbnail: `https://picsum.photos/320/180?random=${index}`
  }));
  res.json(videos);
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
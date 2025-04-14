import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="home">
      <div className="home__videos">
        {videos.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id} className="home__video">
            <div className="home__videoThumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className="home__videoInfo">
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <p>{video.views} • {video.timestamp}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home; 
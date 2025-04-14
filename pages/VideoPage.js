import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPage.css';

function VideoPage() {
  const { id } = useParams();

  return (
    <div className="videoPage">
      <div className="videoPage__player">
        <div className="videoPage__video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoPage__info">
          <h2>Video Title</h2>
          <div className="videoPage__channel">
            <img
              src="https://picsum.photos/40/40"
              alt="Channel"
              className="videoPage__avatar"
            />
            <div className="videoPage__channelInfo">
              <h3>Channel Name</h3>
              <p>1.2M subscribers</p>
            </div>
            <button className="videoPage__subscribe">Subscribe</button>
          </div>
          <div className="videoPage__actions">
            <button className="videoPage__action">
              <i className="fas fa-thumbs-up"></i>
              <span>Like</span>
            </button>
            <button className="videoPage__action">
              <i className="fas fa-thumbs-down"></i>
              <span>Dislike</span>
            </button>
            <button className="videoPage__action">
              <i className="fas fa-share"></i>
              <span>Share</span>
            </button>
            <button className="videoPage__action">
              <i className="fas fa-save"></i>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
      <div className="videoPage__recommended">
        <h3>Recommended Videos</h3>
        {Array(5).fill().map((_, index) => (
          <div key={index} className="videoPage__recommendedVideo">
            <img
              src={`https://picsum.photos/168/94?random=${index}`}
              alt="Recommended"
            />
            <div className="videoPage__recommendedInfo">
              <h4>Recommended Video {index + 1}</h4>
              <p>Channel Name</p>
              <p>100K views • 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPage; 
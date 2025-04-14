import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__category">
        <div className="sidebar__categoryItem active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-fire"></i>
          <span>Trending</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-subscription"></i>
          <span>Subscriptions</span>
        </div>
      </div>
      <hr />
      <div className="sidebar__category">
        <div className="sidebar__categoryItem">
          <i className="fas fa-folder"></i>
          <span>Library</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-history"></i>
          <span>History</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-clock"></i>
          <span>Watch Later</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-thumbs-up"></i>
          <span>Liked Videos</span>
        </div>
      </div>
      <hr />
      <div className="sidebar__category">
        <h3>SUBSCRIPTIONS</h3>
        <div className="sidebar__categoryItem">
          <i className="fas fa-user-circle"></i>
          <span>Channel 1</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-user-circle"></i>
          <span>Channel 2</span>
        </div>
        <div className="sidebar__categoryItem">
          <i className="fas fa-user-circle"></i>
          <span>Channel 3</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar; 
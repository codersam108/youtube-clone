import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="YouTube"
          />
        </Link>
      </div>
      <div className="navbar__center">
        <input type="text" placeholder="Search" className="navbar__search" />
        <button className="navbar__searchButton">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="navbar__right">
        <button className="navbar__icon">
          <i className="fas fa-video"></i>
        </button>
        <button className="navbar__icon">
          <i className="fas fa-th"></i>
        </button>
        <button className="navbar__icon">
          <i className="fas fa-bell"></i>
        </button>
        <button className="navbar__avatar">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar; 
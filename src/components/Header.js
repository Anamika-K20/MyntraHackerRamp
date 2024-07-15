import React from 'react';
import './utils.css'; // Import your CSS file

import userIcon from './user.png'; // Assuming these images are in the same directory as header.js
import heartIcon from './heart.png';
import bagIcon from './shopping-bag.png';

function Header() {
  const logoUrl = 'https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png'; // Replace with your actual logo URL

  return (
    <header className="container">
      <nav className="flex space-between">
        <div className="left flex items-center">
          <a href="index.html">
            <img src={logoUrl} alt="Myntra Logo" />
          </a>
          <ul className="flex items-center justify-center uppercase semibold">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li><a href="main.html">Studio</a></li>
          </ul>
        </div>
        <div className="right flex items-center">
          <input className="search" placeholder="Search for products, brands and more" />
          <div className="header">
            <div className="icons">
              <div className="icon">
                <img src={userIcon} alt="Profile Icon" />
                <p>Profile</p>
              </div>
              <div className="icon">
                <img src={heartIcon} alt="Wishlist Icon" />
                <p>Wishlist</p>
              </div>
              <div className="icon">
                <img src={bagIcon} alt="Bag Icon" />
                <p>Bag</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

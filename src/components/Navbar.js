import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="https://github.com/FrontEndDanni">Github</a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/frontenddanni">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a href="#artwork-section">Art Gallery</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

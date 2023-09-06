import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Projects</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
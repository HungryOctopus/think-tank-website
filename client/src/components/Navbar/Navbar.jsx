import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo-thinktank-white.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="sticky top-0 shadow">
      <div className="navbar-container flex flex-row justify-between">
        <div className="nav-header">
          <img src={logo} alt="think tank logo white" />
        </div>

        <div className="navbar-menu flex justify-end items-center px-3">
          <Link to="/projects" className="px-3" onClick={closeMobileMenu}>
            <h3>Projects</h3>
          </Link>
          <Link to="/about" className="px-3" onClick={closeMobileMenu}>
            <h3>About us</h3>
          </Link>
          <div className="language-selection px-5">
            <h4>EN</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

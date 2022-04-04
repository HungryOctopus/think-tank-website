import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo-thinktank-white.png';

function Navbar() {
  return (
    <nav className="sticky top-0 shadow">
      <div className="navbar-container flex flex-row justify-between">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="think tank logo white" />
          </Link>
        </div>

        <div className="navbar-menu flex justify-end items-center px-3">
          <Link to="/projects" className="px-3">
            <h3>Projects</h3>
          </Link>
          <Link to="/about" className="px-3">
            <h3>About</h3>
          </Link>
          <div className="language-selection px-5">
            <h3 className="bg-white text-sblue px-1">EN</h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

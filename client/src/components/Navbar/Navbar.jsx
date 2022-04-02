import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="sticky top-0 shadow">
        <div className="navbar-container flex flex-row">
          <div className="navbar-logo basis-1/4 content-center p-3">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <h2>Test2</h2>
            </Link>
          </div>
          <div className="navbar-menu basis-3/4 flex justify-end items-center px-3">
            <Link to="/projects" className="px-3" onClick={closeMobileMenu}>
              <h3>Projects</h3>
            </Link>
            <Link to="/about" className="px-3" onClick={closeMobileMenu}>
              <h3>About us</h3>
            </Link>
            <div className="language-selection px-5">
              <h3>EN</h3>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaXing,
  FaYoutube
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-row p-3">
        <div className="contact basis-1/2">
          <ul>
            <li>
              <h4>CONTACT</h4>
            </li>
            <li>Think Tank</li>
            <li>Innovation center</li>
            <li>Musterstrasse 1</li>
            <li>79100 Freiburg im Breisgau</li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>NEWSLETTER</h4>
          <input
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            // onChange={handleEmailChange}
            // value={email}
          />
          <button>
            <h4 className="pl-2">SUBSCRIBE</h4>
          </button>
        </div>
      </div>
      <div className="social-media p-3">
        <h4>FOLLOW US</h4>
        <div className="social flex flex-row">
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaXing />
          <FaYoutube />
        </div>
        {/* here social media icons */}
      </div>
      <div className="bottom flex flex-row p-3">
        <div className="basis-1/4 content-center">
          <h5> © 2022</h5>
        </div>
        <div className="basis-3/4 flex justify-end items-center px-3">
          <Link to="/">
            <h5 className="px-3"> IMPRESSUM </h5>
          </Link>
          <Link to="/">
            <h5 className="px-3"> DATENSCHUTZERKLÄRUNG </h5>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

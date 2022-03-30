import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="flex flex-row p-3">
        <div className="contact basis-1/2">
          <ul>
            <li>CONTACT</li>
            <li>Think Tank</li>
            <li>Innovation center</li>
            <li>Musterstrasse 1</li>
            <li>79100 Freiburg im Breisgau</li>
          </ul>
        </div>
        <div className="newsletter">
          <p>NEWSLETTER</p>
          <input
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            // onChange={handleEmailChange}
            // value={email}
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="social-media p-3">
        <p>FOLLOW US</p>
        {/* here social media icons */}
      </div>
      <div className="bottom flex flex-row p-3">
        <div className="basis-1/4 content-center">
          <h5> 2022 THINK TANK</h5>
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

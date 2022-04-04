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
      <div className="footer-container flex flex-row justify-between p-8">
        <div className="contact">
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

        <div className="social-media">
          <h4 className="ml-3">FOLLOW US</h4>
          <div className="social flex flex-row">
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaXing />
            <FaYoutube />
          </div>
        </div>

        <div className="newsletter">
          <h4>NEWSLETTER</h4>
          <input
            className="email flex flex-col p-2 placeholder:text-black placeholder:text-slate-400 focus:border-sblue-500"
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            // onChange={handleEmailChange}
            // value={email}
          />
          <button className="bg-sblue text-white rounded-md p-2 my-2">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="bottom flex flex-row p-3">
        <div className="basis-1/4 content-center">
          <h5> ©2022</h5>
        </div>
        <div className="basis-3/4 flex justify-end items-center px-3">
          <Link to="/">
            <h5 className="px-3"> IMPRESSUM </h5>
          </Link>
          <Link to="/">
            <h5 className="px-3"> DATENSCHUTZ</h5>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

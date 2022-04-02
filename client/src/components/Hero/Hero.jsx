import React, { useState, useEffect } from 'react';
//import industryPic from './../images/hero-thinktank-1.jpeg';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="claim py-4">
        {/* <img src={industryPic} alt="industry" /> */}
        <h1 className="text-7xl text-white">Engineering the future</h1>
        {/* Gradient on text? */}
        <h1 className="text-7xl text-sblue">together</h1>
      </div>
    </div>
  );
}

export default Hero;

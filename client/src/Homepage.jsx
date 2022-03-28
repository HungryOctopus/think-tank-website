import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Focus from './components/Focus';
import Projects from './components/Projects';
import About from './components/About';

function Homepage() {
  return (
    <>
      <Hero />
      <Focus />
      <Projects />
      <About />
    </>
  );
}

export default Homepage;

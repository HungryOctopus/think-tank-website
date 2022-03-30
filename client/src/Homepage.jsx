import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Focus from './components/Focus/Focus';
import Projects from './components/Projects/Projects';
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

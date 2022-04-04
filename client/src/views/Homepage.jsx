import React from 'react';
import Hero from '../components/Hero/Hero';
import Focus from '../components/Focus/Focus';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';

function Homepage() {
  return (
    <>
      <Hero />
      <Projects />
      <Focus />
      <About />
    </>
  );
}

export default Homepage;

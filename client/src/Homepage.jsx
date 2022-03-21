import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Focus from './components/Focus';
import Projects from './components/Projects';
import About from './components/About';

function Homepage() {
  return (
    <>
      <div>Homepage</div>
      <Header />
      <Focus />
      <Projects />
      <About />
    </>
  );
}

export default Homepage;

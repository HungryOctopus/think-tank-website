import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Homepage from './views/Homepage';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './footer/Footer';
import ProjectsFocus from './views/ProjectsFocus';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsFocus />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

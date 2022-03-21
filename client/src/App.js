import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './Homepage';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        {/* <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

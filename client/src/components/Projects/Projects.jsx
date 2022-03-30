import React, { useState, useEffect } from 'react';
import './../index.css';
import sensor from './icons/sensor-icon.png';
import deepLearning from './icons/deep-learning-icon.png';
import virtualReality from './icons/virtual-reality-icon.png';
import robotic from './icons/robotik-icon.png';
import sustainability from './icons/sustainability-icon.png';
import laser from './icons/laser-icon.png';

function Projects() {
  return (
    <section className="projects-container">
      <div className="bg-white">
        <div className="projects-title">
          <h3>Research on future technologies</h3>
          <h1>Discover our projects</h1>
        </div>
        <div className="project-icons align-center">
          <div className="columns-3 p-3">
            <div>
              <h4>Concept sensors</h4>
              <img src={sensor} alt="sensor" min-width="30px" />
            </div>
            <div>
              <h4>Deep learning</h4>
              <img src={deepLearning} alt="sensor" min-width="30px" />
            </div>
            <div>
              <h4>Virtual reality</h4>
              <img src={virtualReality} alt="sensor" min-width="30px" />
            </div>
            <div>
              <h4>Robotic</h4>
              <img src={robotic} alt="sensor" min-width="30px" />
            </div>
            <div>
              <h4>Green sustainability</h4>
              <img src={sustainability} alt="sensor" min-width="30px" />
            </div>
            <div>
              <h4>Laser technologies</h4>
              <img src={laser} alt="sensor" min-width="30px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

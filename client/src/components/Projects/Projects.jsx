import React, { useState, useEffect } from 'react';
import './Projects.css';
import sensor from './icons/sensor-icon.png';
import deepLearning from './icons/deep-learning-icon.png';
import virtualReality from './icons/virtual-reality-icon.png';
import robotic from './icons/robotik-icon.png';
import sustainability from './icons/sustainability-icon.png';
import laser from './icons/laser-icon.png';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <div className="flex flex-col">
        <div className="bg-white">
          <div className="projects-title p-6">
            <h3>Research on future technologies</h3>
            <h1>Discover</h1>
            <h2>our projects</h2>
          </div>
          <div className="project-icons align-center ">
            <div className="p-3 flex flex-wrap justify-around">
              <div className="flex flex-col align-center m-5">
                <h4 className="p-5 align-center ">Concept sensors</h4>
                <img src={sensor} alt="sensor" min-width="30px" />
              </div>
              <div className="flex flex-col align-center m-5">
                <h4 className="p-5 align-center">Deep learning</h4>
                <img src={deepLearning} alt="sensor" min-width="30px" />
              </div>
              <div className="flex flex-col align-center m-5">
                <h4 className="p-5">Virtual reality</h4>
                <img src={virtualReality} alt="sensor" min-width="30px" />
              </div>

              <div className="flex flex-col align-center m-5">
                <h4 className="p-5">Robotic</h4>
                <img src={robotic} alt="sensor" min-width="30px" />
              </div>
              <div className="flex flex-col align-center m-5">
                <h4 className="p-5">Green sustainability</h4>
                <img src={sustainability} alt="sensor" min-width="30px" />
              </div>
              <div className="flex flex-col align-center m-5">
                <h4 className="p-5">Laser technologies</h4>
                <img src={laser} alt="sensor" min-width="30px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

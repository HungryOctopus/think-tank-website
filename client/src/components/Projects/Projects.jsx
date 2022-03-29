import React, { useState, useEffect } from 'react';
import './../index.css';
import sensor from './icons/sensor-icon.png';

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h3>Research on future technologies</h3>
        <h1>Discover our projects</h1>
      </div>
      <div className="project-icons">
        <div className="columns-3">
          <div>
            <h4>Title</h4>
            <img src={sensor} alt="sensor" width="30px" />
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

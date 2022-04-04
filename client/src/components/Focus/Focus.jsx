import React, { useState, useEffect } from 'react';
import focus from './img/focus.jpg';
import './Focus.css';

function Focus() {
  return (
    <div className="focus">
      <div className="focus-container flex flex-row justify-start p-3">
        <div className="focus-right flex flex-col justify-start">
          <div className="focus-text">
            <h1>Artificial intelligence and deep learning for sensors</h1>
            <p>
              Fast, automatic, reliable decision-making by sensors, even for
              complex tasks reduces development time and expense.
            </p>
          </div>
          <div>
            <button className="btn">DEMO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;

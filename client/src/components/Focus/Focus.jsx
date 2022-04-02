import React, { useState, useEffect } from 'react';
import focus from './img/focus.jpg';
import './Focus.css';

function Focus() {
  return (
    <div className="focus">
      <div className="focus-container flex flex-row justify-around p-3">
        <div className="p-5 m-5">
          <img src={focus} alt="focus-waterfall" />
        </div>
        <div className="focus-right flex flex-col justify-center">
          <div className="focus-text">
            <h1>Artificial intelligence and deep learning for sensors</h1>
            <p>
              Fast, automatic, reliable decision-making by sensors, even for
              complex tasks reduces development time and expense.
            </p>
          </div>
          <div>
            <button className="btn">SEE DEMO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;

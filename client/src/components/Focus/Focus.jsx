import React, { useState, useEffect } from 'react';
import focus from './img/focus.jpg';
import './Focus.css';

function Focus() {
  return (
    <>
      <div className="focus">
        <div>
          <img src={focus} alt="focus-waterfall" />
        </div>
        <div className="focus-right">
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
    </>
  );
}

export default Focus;

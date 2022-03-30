import React, { useState, useEffect } from 'react';
import './About.css';
import team from './team-thinktank.jpeg';

function About() {
  return (
    <section className="about-container">
      <div className="bg-sblue">
        <div className="about-text">
          <div className="flex flex-row items-center p-3">
            <div>
              <h3>Who we are</h3>
              {/* <img src={sensor} alt="sensor" min-width="30px" /> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Erat nam at lectus urna duis.
              </p>
            </div>
            <div className="self-center">
              <h3 className="self-center">Our mission</h3>
              {/* <img src={deepLearning} alt="sensor" min-width="30px" /> */}
              <p>
                Risus nec feugiat in fermentum posuere urna nec tincidunt
                praesent. Libero justo laoreet sit amet cursus. Diam
                sollicitudin tempor id eu. Arcu dui vivamus arcu felis bibendum.
                Orci sagittis eu volutpat odio facilisis. Eu ultrices vitae
                auctor eu augue ut lectus. Libero enim sed faucibus turpis in eu
                mi bibendum neque. Sed ullamcorper morbi tincidunt ornare.
                Ornare arcu dui vivamus arcu felis bibendum. Mattis aliquam
                faucibus purus in massa tempor.
              </p>
            </div>
            <div className="">
              <h3>Our team</h3>
              {/* <img src={virtualReality} alt="sensor" min-width="30px" /> */}
              <p>
                Purus ut faucibus pulvinar elementum integer. Scelerisque
                viverra mauris in aliquam sem fringilla ut morbi tincidunt.
                Eleifend mi in nulla posuere sollicitudin aliquam. Dolor magna
                eget est lorem ipsum dolor. Risus nec feugiat in fermentum
                posuere. Eu volutpat odio facilisis mauris sit amet massa. Ac ut
                consequat semper viverra nam libero justo laoreet. Nec
                ullamcorper sit amet risus nullam eget felis. Gravida rutrum
                quisque non tellus orci ac auctor augue mauris. Praesent semper
                feugiat nibh sed.
              </p>
            </div>
          </div>
          <div>
            <img src={team} alt="team work three women one man computer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

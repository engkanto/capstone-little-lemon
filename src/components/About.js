import React from 'react'
import chef1 from  '../assets/restaurantChefB.jpg';
import chef2 from  '../assets/MarioandAdrianA.jpg';

function About() {
  return (
    <div className="container">
      <div className="grid twocol-grid">
        <div>
          <h2 className='left'>About Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className="about-image-container">
          <div class="about-image-box img-box-1" style={{ backgroundImage: `url(${chef1})` }}>
          </div>
          <div class="about-image-box img-box-2" style={{ backgroundImage: `url(${chef2})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

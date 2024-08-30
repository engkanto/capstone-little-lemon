import React from 'react'

function About() {
  return (
    <div className="container">
      <div className="grid twocol-grid">
        <div>
          <h2>About Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className="grid">
          <img src="https://via.placeholder.com/200x300" alt="Restaurant interior" />
          <img src="https://via.placeholder.com/200x300" alt="Restaurant exterior" />
        </div>
      </div>
    </div>
  )
}

export default About

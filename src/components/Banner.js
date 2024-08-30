import React from 'react'

const Banner = () => {
  return (
    <section className="banner container">
      <div className="grid twocol-grid">
        <div>
          <h1>Little Lemon</h1>
          <p>A taste of Mediterranean cuisine</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Restaurant" />
        </div>
      </div>
    </section>
  )
}

export default Banner
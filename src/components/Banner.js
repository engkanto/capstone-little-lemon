import React from 'react'
import { Link } from 'react-router-dom'
import restaurantfood from '../assets/restauranfood.jpg';

const Banner = () => {
  return (
    <section className="banner" data-theme="dark">
      <div className="container">
        <div className="grid twocol-grid">
          <div>
            <h1>Little Lemon</h1>
            <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className='spacer'></div>
            <Link to="/reservation" type='button'>Reserve a table</Link>
          </div>
          <div>
            <img src={restaurantfood} alt="Restaurant" className='restaurant-image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
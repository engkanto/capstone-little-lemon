import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

function Footer() {
  const { config } = useAppContext()

  return (
    <footer className="container">
      <div className="grid fourcol-grid">
        <div>
          <img src="https://via.placeholder.com/150" alt={`${config.restaurantName} logo`} />
        </div>
        <nav className='footer-nav'>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <address>
            <p>{config.address}</p>
            <p>Phone: <a href={`tel:${config.phone}`}>{config.phone}</a></p>
            <p>Email: <a href={`mailto:${config.email}`}>{config.email}</a></p>
          </address>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            {Object.entries(config.socialMedia).map(([platform, url]) => (
              <li key={platform}>
                <a href={url}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
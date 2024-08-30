import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import restaurantImg from '../assets/restaurant.jpg';

function Footer() {
  const { config } = useAppContext()

  return (
    <footer className="footer" data-theme="dark">
      <div className="container">
        <div className="grid fourcol-grid">
          <div>
            <img src={restaurantImg} alt={`${config.restaurantName}`} className='footer-img' />
          </div>
          <div>
            <p className="title">Little Lemon</p>
            <nav className='footer-nav'>
              <div><Link to="/">Home</Link></div>
              <div><a href="/#about">About</a></div>
              <div><a href="/#menu">Menu</a></div>
              <div><Link to="/reservation">Reservation</Link></div>
              <div><Link to="/order">Order</Link></div>
              <div><Link to="/login">Login</Link></div>
            </nav>
          </div>
          <div>
            <p className="title">Contact</p>
            <address>
              <div>{config.address}</div>
              <div>Phone: <a href={`tel:${config.phone}`}>{config.phone}</a></div>
              <div>Email: <a href={`mailto:${config.email}`}>{config.email}</a></div>
            </address>
          </div>
          <div>
            <p className="title">Social Media</p>
            <div>
              {Object.entries(config.socialMedia).map(([platform, url]) => (
                <div key={platform}>
                  <a href={url}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='copy'>© 2024 Little Lemon Restaurant. All rights reserved.</div>
    </footer>
  )
}

export default Footer
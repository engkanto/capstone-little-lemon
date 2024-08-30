import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="container">
      <div className="grid fourcol-grid">
        <div>
          <img src="https://via.placeholder.com/150" alt="Little Lemon logo" />
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
            <p>123 Main St, Chicago, IL 60601</p>
            <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
            <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
            <li><a href="https://youtube.com/littlelemon">YouTube</a></li>
            <li><a href="https://tiktok.com/@littlelemon">TikTok</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
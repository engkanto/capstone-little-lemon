import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import './Navigation.css'

function Navigation() {
  const { config } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="container">
      <ul>
        <li><strong>{config.restaurantName}</strong></li>
      </ul>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><a href="/#about" onClick={toggleMenu}>About</a></li>
        <li><a href="/#menu" onClick={toggleMenu}>Menu</a></li>
        <li><Link to="/reservation" onClick={toggleMenu}>Reservation</Link></li>
        <li><Link to="/order" onClick={toggleMenu}>Order</Link></li>
        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navigation
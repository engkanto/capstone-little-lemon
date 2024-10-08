import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import './Navigation.css'
import logo from '../assets/Logo.svg'

function Navigation() {
  const { config } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [visibleNav, setVisibleNav] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const ccurrentScrollPosition = window.scrollY
      console.log(window.scrollY);
      setVisibleNav(prevScrollPosition > ccurrentScrollPosition || ccurrentScrollPosition < 10)
      setPrevScrollPosition(ccurrentScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPosition, visibleNav]);

  return (
    <div className={`navbar ${visibleNav ? '' : 'navbar-hidden'}`}>
      <nav className="container">
        <ul>
          <li>
            <img src={logo} alt={config.restaurantName} /></li>
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
    </div>
  )
}

export default Navigation
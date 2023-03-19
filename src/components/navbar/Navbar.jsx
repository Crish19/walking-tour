import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../media/logo.png'
import brand from '../../media/brand.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 270) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}> 
      <div className="navbar-container">
        <Link className='navbar-logo-link' to='hero' smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="Logo" className="navbar-logo"/> 
        </Link>

      <div className="brand">
      <img src={brand} alt="brand" className="navbar-brand brand-img" /> 

      </div>

       
       
        <button className="hamburger-menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link className='navbar-links-item' to="about" spy={true} smooth={true} offset={-245} duration={500} onClick={toggleMenu}>About Us</Link></li>
          <li><Link className='navbar-links-item' to="how-it-works" spy={true} smooth={true} offset={-245} duration={500} onClick={toggleMenu}>How it Works</Link></li>
          <li><Link className='navbar-links-item' to="stockholm" spy={true} smooth={true} offset={-245} duration={500} onClick={toggleMenu}>Stockholm</Link></li>
          <li><Link className='navbar-links-item' to="pricing" spy={true} smooth={true} offset={-245} duration={500} onClick={toggleMenu}>Pricing</Link></li>  
          <li><Link className='navbar-links-item' to="footer" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

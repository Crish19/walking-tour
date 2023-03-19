import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id='hero'>
    <div className="hero-content-container">
        <h1 className="hero-title">Discover Stockholm</h1>
        <p className="hero-subtitle">Explore the city with our walking tours</p>
        <Link to="/contact">
           <button className="hero-cta-btn">Book a Tour</button>
        </Link>
       
    </div>
    {/* <img src={heroImage} alt="" className="hero-image"/> */}
</section>
  )
}

export default Hero
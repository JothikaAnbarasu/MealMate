import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero.webp'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="hero-content" data-aos="slide-right">
          <h1>Delicious food, delivered to your door !</h1>
          <Link to='/meals'>
            <button className='hero-orderNow-btn'>Order now</button>
          </Link>
        </div>
        <div className="hero-img" data-aos="slide-left">
          <img src={heroImg} alt='hero-img' />
        </div>
      </div>
    </div>
  )
}

export default Hero
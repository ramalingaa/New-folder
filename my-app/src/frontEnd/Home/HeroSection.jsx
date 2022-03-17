import React from 'react'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className = "home-hero-wrapper">
        <img src="https://media.istockphoto.com/photos/portrait-of-an-african-american-woman-picture-id501815251?b=1&k=20&m=501815251&s=170667a&w=0&h=7rLqD3XbFrOryJtXJ3qUSJSefCRu9xj_V-d0U8aiDfQ=" alt = "Hero" className = "res-img" />
        <div className = "hero-text-wrapper">
          <p className = "hero-text">Enjoy the best designed and modern clothing & accessories</p>
          <Link to = "/Product" className = "btn primary hero-btn">Explore Deals</Link>
        </div>
    </div>
  )
}


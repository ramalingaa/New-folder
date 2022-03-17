import React from 'react'
import Category from './Category'
import HeroSection from './HeroSection'
import NewArrival from './NewArrival';
const Home = () => {
  return (
    <div className = "home-main-wrapper">
      <Category />
      <HeroSection />
      <NewArrival />
    </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Services from '../../components/Services/Services'
import Subscription from '../../components/Subscription/Subscription'


function HomePage() {
  return (
    <div className='homePage'>
      <Hero />
      <HowItWorks />
      <Services />
      <Subscription />
    </div>
  )
}

export default HomePage
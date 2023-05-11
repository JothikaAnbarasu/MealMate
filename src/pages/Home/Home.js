import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Services from '../../components/Services/Services'
import Subscription from '../../components/Subscription/Subscription'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <HowItWorks />
      <Services />
      <Subscription />
      <Footer />
    </div>
  )
}

export default Home
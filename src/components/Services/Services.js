import React from 'react'
import { AiOutlinePause } from 'react-icons/ai'
import { GiShinyApple, GiInfinity } from 'react-icons/gi'
import { IoLeafOutline } from 'react-icons/io5'
import './Services.css'


function Services() {

  return (
    <div className='services'>
      <article className="services-background" >
        <h2 style={{ position: 'relative' }}>Excellent Services that You Can Count On</h2>

        <div className="service-wrapper" >
          <div className="service">
            <div className="service-icon"><GiInfinity /></div>
            <h4 className="service-title">Never cook again</h4>
            <p className="service-content"> Our subscriptions cover 365 days per year, even including major holidays.</p>
          </div>
          <div className="service">
            <div className="service-icon"><GiShinyApple /></div>
            <h4 className="service0title">Local and organic</h4>
            <p className="service-content">Our cooks only use local, fresh, and organic products to prepare your meals.</p>
          </div>
          <div className="service">
            <div className="service-icon"><IoLeafOutline /></div>
            <h4 className="service0title">No waste</h4>
            <p className="service-content">All our partners only use reusable containers to package all your meals.</p>
          </div>
          <div className="service">
            <div className="service-icon"><AiOutlinePause /></div>
            <h4 className="service0title">Pause anytime</h4>
            <p className="service-content">Going on vacation? Just pause your subscription, and we refund unused days.</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Services
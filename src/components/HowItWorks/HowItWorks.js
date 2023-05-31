import React from 'react'
import './HowItWorks.css'
import content1 from '../../assets/howItWorks1.png'
import content2 from '../../assets/howItWorks2.png'
import content3 from '../../assets/howItWorks3.png'


function HowItWorks() {

  return (
    <div className='howItWorks'>
      <div className="howItWorks-header">
        <h1>How it works...</h1>
      </div>
      <div className="howItWorks-contents">
        <div className="howItWorks-content1" data-aos="fade-right">
          <img src={content1} alt='select restraunt img' />
          <h3><span>1</span> Select Restaurant</h3>
          <p>Browse through our selection of restaurants and pick the one that catches your eye.</p>
        </div>
        <div className="howItWorks-content2" data-aos="fade-up">
          <img src={content2} alt='select menu img' />
          <h3><span>2</span> Select Menu</h3>
          <p>Once you've chosen a restaurant, take a look at their menu and select the dishes that make your taste buds tingle.</p>
        </div>
        <div className="howItWorks-content3" data-aos="fade-left">
          <img src={content3} alt='wait for delivery img' />
          <h3><span>3</span> Wait for delivery</h3>
          <p>Sit back, relax, and wait for your food to arrive. Our delivery partners will bring your meal right to your doorstep.</p>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks

import React from 'react'
import './Subscription.css'
import subscribeImg from '../../assets/subscription.png'
import { FaBell } from 'react-icons/fa'


function Subscription() {


  return (
    <div className='subscription'>
      <div className="subscription-img" data-aos="slide-right">
        <img src={subscribeImg} alt="subscribe" />
      </div>
      <div className="subscription-content" data-aos='slide-left'>
        <h1>Get the menu of your favorite restaurants every day</h1>
        <form className='subscription-form'>
          <input
            type='email'
            className='form-input'
            placeholder=" Enter email address"
          />
          <button type='button' className='subscribe-btn'>
            subscribe <span><FaBell /></span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscription
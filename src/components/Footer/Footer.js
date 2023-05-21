import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-logo-section">
          <a href='#'>
            <h2 className="footer-logo"><span style={{ color: "white" }}>Meal</span><span style={{ color: "rgb(242, 159, 5)" }}>Mate</span></h2>
          </a>
          <h3 style={{ color: "whitesmoke", marginBottom: "20px", letterSpacing: "none" }}>Delicious food, delivered to your door !</h3>
          <div className='footer-icons'>
            <a href='#'><button className="footer-icons-btn"><FaFacebookF /></button></a>
            <a href='#'> <button className="footer-icons-btn"><FaInstagram /></button></a>
            <a href='#'> <button className="footer-icons-btn"><FaTwitter /></button></a>
          </div>
        </div>
        <div className="footer-contactUs">
          <h5>Contact us</h5>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

        </div>
        <div className="footer-company">
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-legal">
          <h5>Legal</h5>
          <ul>
            <li>Terms & condtions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="copyrights-div">
        <hr style={{ marginBottom: "20px" }} />
        <p >Copyright © 2022. Mealmate. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
import React from 'react'
import './AboutPage.css'
import PageHero from '../../components/PageHero/PageHero'
import aboutPageAnimatedImg from '../../assets/aboutPageAnimatedImg.gif'

function AboutPage() {
  return (
    <div className='aboutPage'>
      <PageHero title=' About Us' />
      <div className="about-page-content-container">
        <div className="about-page-title">
          <h1 >
            <img src={aboutPageAnimatedImg} alt='Food' />
            Nothing to worry about with Meal<span style={{ color: "rgb(242, 159, 5)" }}>Mate</span>...</h1>
        </div>

        <div className="about-page-services-wrapper" >
          <div className="about-page-service" data-aos="fade-right" data-aos-offset="2">
            <h3>Our Mission</h3>
            <p>At MealMate, our mission is to make food ordering effortless, enjoyable, and satisfying. We believe that everyone deserves access to great food, delivered with speed and precision.</p>
          </div>


          <div className="about-page-service" data-aos="fade-left" data-aos-offset="10">
            <h3>Wide Range of Cuisines</h3>
            <p>Discover a world of flavors with our wide selection of cuisines. From Asian fusion to Italian classics, we've partnered with the best local restaurants to offer you a diverse range of options. Explore and indulge in your favorite dishes or try something new and exciting.</p>
          </div>

          <div className="about-page-service" data-aos="fade-right" data-aos-offset="10">
            <h3>Catering to Your Dietary Preferences</h3>
            <p>We understand that everyone has different dietary preferences and requirements. That's why we provide a range of choices for vegetarians, vegans, and those with specific dietary needs. Simply filter your search to find dishes that align with your preferences and enjoy a meal tailored just for you.</p>
          </div>

          <div className="about-page-service" data-aos='fade-left' data-aos-offset="10">
            <h3>Easy Ordering Process</h3>
            <p>With our user-friendly app, ordering your favorite meals is a breeze. Browse through menus, customize your order, and effortlessly place it with a few taps. Whether you're at home, at work, or on the go, we've made it convenient for you to satisfy your cravings.</p>
          </div>

          <div className="about-page-service" data-aos='fade-right' data-aos-offset="10">
            <h3>Prompt and Reliable Delivery</h3>
            <p>We take pride in ensuring your order arrives promptly and in top condition. Our delivery partners are dedicated to providing a reliable and efficient service, ensuring that your food is delivered hot and fresh to your desired location.</p>
          </div>

          <div className="about-page-service" data-aos='fade-left' data-aos-offset="10">
            <h3>Customer Satisfaction</h3>
            <p>Your satisfaction is our top priority. If you have any questions, concerns, or special requests, our friendly customer support team is here to assist you. We value your feedback and are committed to continuously improving our services to meet and exceed your expectations.</p>
          </div>
        </div>

        <div className="about-page-footer">
          <h2>Thank you for choosing Meal<span style={{ color: "rgb(242, 159, 5)" }}>Mate</span> . Let's embark on a delightful food adventure together!
          </h2>
        </div>
      </div>
    </div>
  )
}


export default AboutPage


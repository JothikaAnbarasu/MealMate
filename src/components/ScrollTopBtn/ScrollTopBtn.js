import React, { useState, useEffect } from 'react'
import './ScrollTopBtn.css'
import { FaHandPointUp } from 'react-icons/fa'

function ScrollTopBtn() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollPosition > 200);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='scrollTopBtn' onClick={scrollToTop}
      style={{ display: showButton ? 'block' : 'none' }}> <FaHandPointUp /></button>
  )
}

export default ScrollTopBtn
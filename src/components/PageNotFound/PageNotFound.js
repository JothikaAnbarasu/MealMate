import React from 'react'
import pageNotFoundImg from '../../assets/pageNotFoundImg.avif'
import './PageNotFound.css'

function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <div>
        <img src={pageNotFoundImg} alt='404image' />
      </div>
      <div>
        <p>
          Oops! The page you're looking for cannot be found.</p>
      </div>
    </div>
  )
}

export default PageNotFound
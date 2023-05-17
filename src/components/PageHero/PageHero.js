import React from 'react'
import './PageHero.css'
import { Link } from 'react-router-dom'

function PageHero({ title, menuItems }) {
  return (
    <div className='pagehero'>
      <h4>
        <Link to='/'>Home </Link>
        <span> ➡ </span>
        {menuItems && (
          <>
            <Link to='/meals' >Meals</Link>
            <span> ➡ </span>
          </>
        )}
        {title}
      </h4>
    </div>
  )
}

export default PageHero
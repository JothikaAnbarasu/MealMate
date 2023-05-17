import React from 'react'
import './MenuCard.css'
import { IoTriangleSharp } from 'react-icons/io5'
import { GoPrimitiveDot } from 'react-icons/go'
import Stars from '../Stars/Stars'
import AddToCart from '../AddToCart/AddToCart'

function MenuCard({ item }) {
  return (
    <div className='menuCard'>

      <div className="menuCard-image-wrapper">
        <img src='https://b.zmtcdn.com/data/dish_photos/ff2/80aee578c1278794fdc9f7a909fdeff2.jpg?fit=around|130:130&crop=130:130;*,*' />
      </div>

      <div className="menuCard-content-wrapper">
        <div className="menuCard-name"><h5>{item.name}</h5></div>
        <div className="menuCard-rating">
          <Stars stars={item.rating} />
        </div>
        <div className="menuCard-price"><p className='price'>{item.price}</p></div>
        {item.vegetarian ?
          <div className="menuCard-veg" style={{ color: "green" }}>
            <span className=' menuCard-veg-icon'><GoPrimitiveDot /> </span>  veg
          </div> :
          <div className="menuCard-veg" style={{ color: "rgb(223, 33, 33)" }}>
            <span className=' menuCard-non-veg-icon'><IoTriangleSharp /> </span>  non veg
          </div>
        }

        <div className="menuCard-cuisine" style={{ color: "rgb(255,126,139)" }}>{item.cuisine}</div>
      </div>

      <div className="menuCard-add-to-cart-wrapper">
        <AddToCart />
      </div>


    </div>
  )
}

export default MenuCard
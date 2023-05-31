import React from 'react'
import './RestaurantCard.css'
import { TiStar } from 'react-icons/ti'
import { RiMotorbikeFill } from 'react-icons/ri'
import { BsFilterRight } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Link } from 'react-router-dom'


function RestaurantCard({ restaurantCuisines, restaurant }) {


  return (
    <Link to={`/meals/${restaurant.name}`} data-aos="fade-up">

      <div className='restaurantCard'>

        <div className="restaurantCard-img-wrapper">
          <img className="restaurantCard-img" src={restaurant.image} alt={restaurant.name} />
          {restaurant.offers && <span className="restaurantCard-offertag">50% offer upto 100</span>}
          {restaurant.fastDelivery && <span className="restaurantCard-fast-delivery-tag">Fast delivery <BsFilterRight /> <RiMotorbikeFill /></span>}
        </div>

        <div className="restaurantCard-name-wrapper">
          <div className="res-name">
            {restaurant.name}
          </div>
          <div className="res-rating">
            {restaurant.rating} {< TiStar />}
          </div>
        </div>

        <div className="restaurantCard-cuisines">
          {restaurantCuisines.map((c, i) => {
            if (i === restaurantCuisines.length - 1) return <span key={i}>{c}</span>;
            else return <span key={i}>{c} , </span>
          })}
        </div>

        {restaurant.veg ?
          <div className="restaurantCard-veg" style={{ color: "green" }}>
            <span className='resCard-veg-icon'><GoPrimitiveDot /> </span> Pure veg
          </div>
          : <div style={{ height: "23px", width: "200px" }}></div>
        }

        <hr />

        <div className="restaurantCard-menu-btn-wrapper">
          <button className='resCard-menu-btn' type='button'>View Menu</button>
        </div>
      </div>

    </Link>
  )
}

export default RestaurantCard
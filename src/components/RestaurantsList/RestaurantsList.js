import React, { useState, useEffect } from 'react'
import './RestaurantsList.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import Filters from '../../components/Filters/Filters'
import { useRestaurantsContext } from '../../context/restaurants_context'
import { useFilterContext } from '../../context/filter_context'
import filter_reducer from '../../reducers/filter_reducer'
import { GiWrappedHeart } from 'react-icons/gi'

function RestaurantsList() {
  const { restaurants, fetchRestaurants } = useRestaurantsContext();
  const { filtered_restaurants } = useFilterContext();
  useEffect(() => {
    // Fetch the JSON data
    fetchRestaurants('/menu.json');
  }, []);

  return (
    <div className='restaurants-list'>
      <h3 className='restaurants-list-heading'>Restaurant Spotlights</h3>
      <h5 className='restaurants-list-subheading'>Exploring culinary delights...</h5>
      <div className="restaurants-list-filters-wrapper">
        <Filters />
      </div>
      {filtered_restaurants.length < 1 ?
        <div className="no-results-wrapper">
          <div>
            <h4>Sorry, no results found...</h4>
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdZrvYpviBSKe2dO8NIrus2ST625Gn-oX31EKNhNVuc1zNv6KyXKpzIRamQl3nyS5S1w&usqp=CAU' alt='no-result image' />
          </div>

          <div>
            <p>Try again with fewer filters !</p>
          </div>
        </div> :
        <div className="restaurantCards-wrapper">
          {filtered_restaurants && filtered_restaurants.map((res, index) => {
            let cuisines = res.menu.map((item) => {
              return item.cuisine;
            })
            let cuisinesSet = [...new Set(cuisines)]
            return <RestaurantCard restaurant={res} key={index} restaurantCuisines={cuisinesSet} />
          })}
        </div>
      }

    </div>
  )
}

export default RestaurantsList
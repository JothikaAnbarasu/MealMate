import React from 'react'
import './MealsPage.css'
import PageHero from '../../components/PageHero/PageHero'
import FoodVarieties from '../../components/FoodVarieties/FoodVarieties'
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList'



function MealsPage() {

  return (
    <div className='mealsPage'>
      <PageHero title=' Meals' />
      <FoodVarieties />
      <RestaurantsList />
    </div>
  )
}

export default MealsPage
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero'
import { useRestaurantsContext } from '../../context/restaurants_context';
import './SingleRestaurantPage.css'
import { TiStar } from 'react-icons/ti'
import MenuCard from '../../components/MenuCard/MenuCard';

function SingleRestaurantPage() {
  const { name } = useParams();
  const { getSingleRestaurantMenu, restaurants, singleRestaurant } = useRestaurantsContext();

  useEffect(() => {
    getSingleRestaurantMenu(`${name}`);
  }, [name, restaurants])

  return (
    <div className='singleRestaurantPage'>
      <PageHero menuItems title={name} />
      <div className="single-restaurant-details">
        <div className="single-res-image-wrapper">
          <img className='single-res-image' src={singleRestaurant.image} alt='restaurant image' />
          <div className="res-rating single-res-rating">
            {singleRestaurant.rating} {< TiStar />}
          </div>
        </div>

        <div className="single-res-name">
          <h3>{singleRestaurant.name}</h3>
        </div>
        <div className="single-res-description">
          <p>{singleRestaurant.description}</p>
        </div>
      </div>
      <hr style={{ margin: " 0 10%" }} />

      <div className="single-res-page-menu-container">
        <div className="single-res-page-menu-heading">
          <h2 style={{ color: "rgb(226,55,69)" }}>Discover Our Delectable Menu !</h2>
        </div>
        <div className="single-res-page-menucards-wrapper">
          {singleRestaurant.menu && singleRestaurant.menu.map((item, index) => {
            return (<MenuCard item={item} key={index} />)
          })}
        </div>
      </div>

    </div>
  )
}

export default SingleRestaurantPage
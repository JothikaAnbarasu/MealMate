import React from 'react'
import { foodVarietiesImages } from '../../utils/constants'
import './FoodVarieties.css'
function FoodVarieties() {
  return (
    <div className='foodVarieties'>
      <div className="foodVarieties-title">
        <h3>Foodies favourites to try</h3>
      </div>
      <div className="foodVarieties-images">
        {foodVarietiesImages.map((foodImg, index) => {
          return (
            <div key={index} >
              <img src={foodImg} style={{ width: "144px", height: "180px" }} alt='food' />
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default FoodVarieties
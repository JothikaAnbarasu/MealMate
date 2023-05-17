import React, { useState } from 'react'
import './AddToCart.css'
import { FaPlus, FaMinus } from 'react-icons/fa'

function AddToCart() {
  const [addToCartAmount, setAddToCartAmount] = useState(1)


  const handleDecrease = () => {
    if (addToCartAmount > 1) {
      setAddToCartAmount(addToCartAmount - 1)
    }
  }

  const handleIncrease = () => {
    setAddToCartAmount(addToCartAmount + 1)
  }

  return (
    <div className='addToCart'>

      <div className="add-to-cart-amount-btns-wrapper">
        <button className="add-to-cart-amount-btn" onClick={handleDecrease}>
          <FaMinus />
        </button>
        <div className="add-to-cart-amount">
          {addToCartAmount}
        </div>
        <button className="add-to-cart-amount-btn" onClick={handleIncrease}>
          <FaPlus />
        </button>
      </div>
      <div className="add-to-cart-btn-wrapper">
        <button className='add-to-cart-btn'>Add to cart </button>
      </div>
    </div>
  )
}

export default AddToCart
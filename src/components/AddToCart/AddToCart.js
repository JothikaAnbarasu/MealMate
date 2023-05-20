import React, { useState } from 'react'
import './AddToCart.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import AmountButtons from '../AmountButtons/AmountButtons'
import { useCartContext } from '../../context/cart_context'

function AddToCart({ item, restaurantName }) {
  const { addToCart } = useCartContext();

  const [addToCartAmount, setAddToCartAmount] = useState(1)

  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, addToCartAmount, restaurantName);
    setIsAddToCartModalOpen(true);
    setTimeout(() => {
      setIsAddToCartModalOpen(false);
    }, 3000);
  }

  const handleDecrease = () => {
    if (addToCartAmount > 1) {
      setAddToCartAmount(addToCartAmount - 1)
    }
  }

  const handleIncrease = () => {
    setAddToCartAmount(addToCartAmount + 1)
  }

  return (
    <>
      <div className='addToCart'>

        <div className="add-to-cart-amount-btns-wrapper">
          <AmountButtons amount={addToCartAmount} decrease={handleDecrease} increase={handleIncrease} />
        </div>
        <div className="add-to-cart-btn-wrapper">
          <button className='add-to-cart-btn' onClick={handleAddToCart}>Add to cart </button>
        </div>

      </div>
      {isAddToCartModalOpen &&
        <div className='add-to-cart-modal'>
          {addToCartAmount > 1
            ? <p>{addToCartAmount} items added to cart</p>
            : <p>{addToCartAmount} item added to cart</p>
          }
          <Link to='/cart'>
            <button className='view-cart-btn'>VIEW CART {<FaShoppingCart />}</button>

          </Link>

        </div>}
    </>

  )
}

export default AddToCart
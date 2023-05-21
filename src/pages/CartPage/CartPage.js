import React, { useState } from 'react'
import './CartPage.css'
import PageHero from '../../components/PageHero/PageHero'
import CartContent from '../../components/CartContent/CartContent';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';


function CartPage() {
  const { cart, clearCart } = useCartContext();

  return (

    <div className='CartPage'>
      <PageHero title=' Cart' />
      {cart.length < 1 ?
        <div className='cart-empty-container'>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU' alt='cart-empty' />
          </div>
          <div>
            <p>You can go to meals page to view more restaurants</p>
          </div>
          <div>
            <Link to='/meals'>
              <button className='see-restaurants-btn'>
                See Restaurants
              </button>
            </Link>
          </div>
        </div> :
        <div className='cart-content-container'>
          <div className="cart-content-heading" >
            <h3>Your Cart</h3>
            <hr />
          </div>
          <CartContent />
          <hr />
          <div className="cart-page-link-btns-wrapper">
            <Link to='/meals'>
              <button className='cart-page-link-btn' type='button'>Continue Ordering</button>
            </Link>
            <button className='cart-page-link-btn clr-cart-btn' type='button' onClick={clearCart}>Clear Cart</button>
          </div>

        </div>
      }

    </div>
  )
}

export default CartPage
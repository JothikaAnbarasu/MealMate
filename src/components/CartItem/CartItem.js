import React from 'react'
import './CartItem.css'
import AmountButtons from '../AmountButtons/AmountButtons'
import { useCartContext } from '../../context/cart_context'


function CartItem({ item }) {

  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(item.id, 'inc')
  }
  const decrease = () => {
    toggleAmount(item.id, 'dec')
  }
  return (
    <div className='cartItem'>
      <div className="cartItem-img-wrapper">
        <img src={item.image} alt={item.name} />
        <h5>{item.name}</h5>
        <p>{item.restaurantName}</p>
      </div>

      <div className="cartItem-quantity-wrapper">
        <AmountButtons amount={item.amount} increase={increase} decrease={decrease} />
      </div>
      <div className="cartItem-subtotal-wrapper price">
        {item.amount * item.price}
      </div>
      <div className="cartItem-del-btn-wrapper">
        <button className='cartItem-del-btn' onClick={() => { removeItem(item.id) }}>Delete</button>
      </div>
    </div>
  )
}

export default CartItem
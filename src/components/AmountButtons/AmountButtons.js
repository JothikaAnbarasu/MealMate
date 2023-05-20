import React from 'react'
import './AmountButtons.css'
import { FaPlus, FaMinus } from 'react-icons/fa'


function AmountButtons({ increase, decrease, amount }) {
  return (
    <>
      <button className="cart-amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <div className="cart-amount">
        {amount}
      </div>
      <button className="cart-amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </>
  )
}

export default AmountButtons
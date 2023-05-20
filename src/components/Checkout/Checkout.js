import React from 'react'
import './Checkout.css'
import { useCartContext } from '../../context/cart_context'
import { FaTimes } from 'react-icons/fa';


function Checkout() {
  const { isCheckoutOpen, closeCheckout, total_price, openOrderPlacedModal } = useCartContext();
  return (
    <div className={`${isCheckoutOpen ? 'checkout show-checkout' : 'checkout'}`}>
      <div className="checkout-header">
        <h4>Chekout</h4>
        <span className='checkout-close' onClick={closeCheckout}>
          <FaTimes />
        </span>
      </div>
      <div className="checkout-form-wrapper">
        <form onSubmit={(e) => e.preventDefault()} className='checkout-form'>

          <label htmlFor='name' >Name: </label><br />
          <input type='text' name='name' id='name' className='mb-2 checkout-form-input' />
          <br />
          <label htmlFor='phone' >Phone No.: </label><br />
          <input type='tel' id='phone' name='phone' className='mb-2 checkout-form-input' />
          <br />

          <label htmlFor='address' >Delivery Address:</label><br />
          <textarea rows="4" cols="30" id='address' name='address' className='mb-2 checkout-form-input' />
          <br />

          <label htmlFor='pincode' >Pincode: </label><br />
          <input type='number' id='pincode' name='pincode' className='mb-2 checkout-form-input' />
          <br />

          <p className='mb-2'>To Pay : <span style={{ color: "green" }} className='price'>{total_price}</span> </p>

          <input type='checkbox' id='PaymentMode1' name='PaymentMode1' value='onlinePayment' disabled />
          <label htmlFor='PaymentMode1' style={{ opacity: "0.6", marginLeft: "6px" }}>Online Payment</label>
          <br />

          <input type='checkbox' className='mb-2' id='PaymentMode2' name='PaymentMode2' value='cashOnDelivery' />
          <label htmlFor='PaymentMode2' style={{ marginLeft: "6px" }}>Cash On Delivery</label>
          <br />

          <button type='reset' className='mb-2 reset-btn'>Reset</button>
          <br />

          <button type='button' className='place-order-btn' onClick={() => {
            openOrderPlacedModal();
            closeCheckout();
          }}>Place Order</button>

        </form>
      </div>

    </div>
  )
}

export default Checkout
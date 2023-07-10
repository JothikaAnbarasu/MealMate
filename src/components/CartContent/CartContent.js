import React from 'react'
import './CartContent.css'
import CartItem from '../CartItem/CartItem'
import { useCartContext } from '../../context/cart_context'
import Checkout from '../Checkout/Checkout'
import OrderPlacedModal from '../../components/Modal/OrderPlacedModal';


function CartContent() {
  const { cart, total_price, openCheckout, isOrderPlacedModalOpen } = useCartContext()
  return (
    <div className='cartContent'>

      <div className="cartItems-container">
        {cart.map((item, index) => {
          return <CartItem item={item} key={index} />
        })}
      </div>
      <div className="order-total" data-aos="slide-left" data-aos-duration="500">
        <div>
          <h4>Order Total:
            <span className='price' style={{ fontSize: "medium", color: 'green' }}>
              {total_price}
            </span></h4>
        </div>
        <div>
          <button type='button' className='place-order-btn' onClick={openCheckout}>Proceed To Checkout</button>
        </div>
      </div>
      <Checkout />
      {isOrderPlacedModalOpen && <OrderPlacedModal />}
    </div>
  )
}

export default CartContent
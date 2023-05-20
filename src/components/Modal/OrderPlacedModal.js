import React, { useCallback } from 'react'
import './Modal.css'
import { FaTimesCircle } from 'react-icons/fa'
import { useCartContext } from '../../context/cart_context'

function OrderPlacedModal() {

  const { closeOrderPlacedModal } = useCartContext();

  return (
    <div className='modal-background' onClick={closeOrderPlacedModal}>
      <div className="modal-container orderPlacedModal-container" onClick={(event) => event.stopPropagation()}>

        <div className='modal-title'>
          <div></div>
          <span style={{ fontSize: "larger", color: "rgb(208, 29, 29)" }} onClick={closeOrderPlacedModal}><FaTimesCircle /></span>
        </div>

        <div className="modal-form-wrapper orderPlacedModal-content-wrapper">
          <div className='orderPlacedModal-heading'>
            <h4>Your Order Placed Successfully!!!</h4>
          </div>
          <div className='orderPlacedModal-img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlerp8c9-EKQFzOdaWtOO0Ic8ZOZeXNMlrcQ&usqp=CAU" alt='tick symbol' />
          </div>
          <div className='orderPlacedModal-description'>
            <p>Get ready to indulge in a feast of flavors!</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderPlacedModal
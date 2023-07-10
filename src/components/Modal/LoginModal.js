import React from 'react'
import './Modal.css'
import { FaTimesCircle } from 'react-icons/fa'
import { useNavbarContext } from '../../context/navbar_context';


function LoginModal() {

  const { closeModal, SignUp } = useNavbarContext();

  return (
    <div className='loginModal' >
      <div className='modal-background' onClick={closeModal}>
        <div className="modal-container" data-aos="zoom-in-up" data-aos-duration="500" onClick={(event) => event.stopPropagation()}>
          <div className="modal-title">
            <h4>Login</h4>
            <span onClick={closeModal}><FaTimesCircle /></span>
          </div>
          <div className="modal-form-wrapper">
            <form className='modal-form'>
              <input type="email" placeholder='Email' />
              <input type='password' placeholder='Password' />
            </form>
            <button className='modal-form-btn hero-orderNow-btn' onClick={closeModal} >Login</button>
          </div>
          <hr style={{ marginBottom: "10px" }} />
          <div className="modal-footer">
            <p style={{ display: 'inline' }}>New to Mealmate? </p>
            <span style={{ color: "orange", cursor: "pointer" }} onClick={SignUp}>Create account</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
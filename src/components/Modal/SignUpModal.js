import React from 'react'
import './Modal.css'
import { FaTimesCircle } from 'react-icons/fa'
import { useNavbarContext } from '../../context/navbar_context';

function SignUpModal() {

  const { closeModal, Login } = useNavbarContext();

  return (
    <div className='signUpModal'>
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-container" data-aos="zoom-in-up" data-aos-duration="500" onClick={(event) => event.stopPropagation()}>
          <div className="modal-title">
            <h4>Sign up</h4>
            <span onClick={closeModal}><FaTimesCircle /></span>
          </div>
          <div className="modal-form-wrapper">
            <form className='modal-form'>
              <input type='text' placeholder='Fullname' />
              <input type="email" placeholder='email' />
            </form>
            <button className='modal-form-btn hero-orderNow-btn' onClick={closeModal} >Sign up</button>
          </div>
          <hr style={{ marginBottom: "10px" }} />
          <div className="modal-footer">
            <p style={{ display: 'inline' }}>Already have an account? </p>
            <span style={{ color: "orange", cursor: "pointer" }} onClick={Login}>Login</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal
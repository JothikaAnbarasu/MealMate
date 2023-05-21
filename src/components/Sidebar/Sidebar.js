import React from 'react'
import './Sidebar.css'
import { useNavbarContext } from '../../context/navbar_context'
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Sidebar() {
  const { isSidebarOpen, closeSidebar, Login, SignUp } = useNavbarContext();
  return (
    <div className="sidebar-container">
      <aside className={`${isSidebarOpen ? 'sidebar showSidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-logo">
            <Link to='/'>
              <h2 className="logo"><span style={{ color: "black" }}>Meal</span><span style={{ color: "rgb(242, 159, 5)" }}>Mate</span></h2>
            </Link>
          </div>
          <div className="sidebar-header-cancle-btn" onClick={closeSidebar}>
            <FaTimesCircle />
          </div>
        </div>
        <div className="sidebar-links-container">
          <div className="sidebar-links-wrapper">

            <Link to='/' onClick={closeSidebar}><div>Home</div></Link>


            <Link to='/about' onClick={closeSidebar}><div>About Us</div></Link>


            <Link to='/meals' onClick={closeSidebar}><div>Meals</div></Link>


            <Link to='/cart' onClick={closeSidebar}>
              <div>Cart</div>
            </Link>

            <div>
              <Link to='/'>
                <button className='login-btn' onClick={Login}>Login</button>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <button className='signUp-btn' onClick={SignUp}>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </aside >
    </div >
  )
}

export default Sidebar
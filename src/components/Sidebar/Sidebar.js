import React from 'react'
import './Sidebar.css'
import { useNavbarContext } from '../../context/navbar_context'
import { FaTimesCircle, FaShoppingCart } from 'react-icons/fa'
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
          <div className="siderbar-menulinks-wrapper">
            <ul>
              <li>
                <Link to='/' onClick={closeSidebar}>Home</Link>
              </li>
              <li>
                <Link to='/about' onClick={closeSidebar}>About</Link>
              </li>
              <li>
                <Link to='/meals' onClick={closeSidebar}>Meals</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-cartbtns-wrapper">
            <ul>
              <li >
                <Link to='/cart' className='header-cart-icon' onClick={closeSidebar}> Cart <FaShoppingCart />
                  <span className='header-cart-value'>0</span></Link>
              </li>
              <li>
                <Link to='/'>
                  <button className='login-btn' onClick={Login}>Login</button>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <button className='signUp-btn' onClick={SignUp}>Sign Up</button>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
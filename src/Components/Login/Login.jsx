import React from 'react'
import './Login.css'
import NavImg from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <div className="" >
         {/* Navigation */}
      <nav className="nav-bar">
        <img src={NavImg} alt="Navigation" className="nav-img" />
        <ul className="nav-links">
          <li><NavLink to="/"><button className="button-contact">Home</button></NavLink></li>
          <li><button className="button-contact">About Us</button></li>
          <li><button className="button-contact">Services/Products</button></li>
          <li><NavLink to="/Contact"><button className="button-contact">Contact Us</button></NavLink></li>
          <li><NavLink to="/login"><button className="button-nav">Login</button></NavLink></li>
        </ul>
      </nav>
        <div className='login-page'>


            <div className="login_section">

            <form action=''>
                 <h2 className='login01'>Login</h2>

                 <div className='input-che'>
                     <input type="text" placeholder='Username' required/> 
                 </div>
            
                 <div className='input-che'>
                     <input type="password" placeholder='password' required/> 
                 </div>

                 <div className='forgot'>
                    <label><input type="checkbox"/>Remember me  </label> 
                    <a href="#">Forgot password</a>
                 </div>

                 <button type='submit'>Login</button>
                 
                 <div className='register-acc'>
                    <p3>Don't have an account? <a href='#'>Register</a></p3>
                 </div>
                 
            </form>

            </div>
       
        </div>
          
    </div>
  )
}

export default Login
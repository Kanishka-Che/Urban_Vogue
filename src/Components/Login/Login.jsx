import React from 'react'
import './Login.css'
import NavImg from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <div className="" >
        <nav>
              <img src={NavImg}/>
              <ul>
              <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/About">About Us</NavLink></li>
                  <li><NavLink to="/Services">Services/Products</NavLink></li>
  
                  <li><NavLink to="/Contact">Contact Us</NavLink></li>
  
                  <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
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

                 <button className='batton01' type='submit'>Login</button>
                 
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
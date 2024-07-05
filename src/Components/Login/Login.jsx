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
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li><NavLink to="/user-login"><button className="buttonNav" >Login</button></NavLink></li>
            </ul>
        </nav>
        <div className='login-page'>


            <div className="login_section">

            <form action=''>
                 <h2>Login</h2>

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
                    <p>Don't have an account? <a href='#'>Register</a></p>
                 </div>
                 
            </form>

            </div>
       
        </div>
          
    </div>
  )
}

export default Login
import React from 'react'
import './Login.css'
import NavImg from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <div className="" >

        <div className='login-page'>


            <div className="login_section">

            <form action=''>
                 <h2 className='Login'>Login</h2>
                <div>
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

                 </div>
                 
            </form>

            </div>
       
        </div>
          
    </div>
  )
}

export default Login
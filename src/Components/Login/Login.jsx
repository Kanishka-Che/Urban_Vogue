import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Login = () => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate hook

  const handleRegisterClick = () => {
    navigate("/register");  // Programmatically navigate to the register page
  };

  return (
    <div className="">
      <div className='login-page'>
        <div className="login_section">
          <form action=''>
            <h2 className='Login'>Login</h2>
            <div>
              <div className='input-che'>
                <input type="text" placeholder='Username' required />
              </div>

              <div className='input-che'>
                <input type="password" placeholder='Password' required />
              </div>

              <div className='forgot'>
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password</a>
              </div>

              <button type='submit'>Login</button>
            </div>
          </form>

          <div className='register-acc'>
            <p>Don't have an account?</p>
            <button onClick={handleRegisterClick} className='register-button'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

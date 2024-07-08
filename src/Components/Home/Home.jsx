import React from 'react'
import './Home.css'
import NavImg from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
         <nav>
              <img src={NavImg}/>
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>

                  
                  <li><NavLink to="/About"><button className='batton03'></button>About Us</NavLink></li>

                  <li>Services/Products</li>
                  
                  <li><NavLink to="/Contact"><button className='buttonNav'></button>Contact Us</NavLink></li>
                  
                  <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
              </ul>
          </nav>



 </div>
  )
}

export default Home;
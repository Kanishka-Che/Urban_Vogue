import React from 'react'
import './Services.css'
import { NavLink } from 'react-router-dom'
import NavImg from '../../assets/Untitled.png'

const Services = () => {
    return (
      <div>
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


       </div>
       
    )
}
export default Services     
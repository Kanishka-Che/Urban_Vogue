import React from 'react'
import './Contact-Us.css'
import { NavLink } from 'react-router-dom'
import NavImg from '../../assets/Untitled.png'


const Contact = () => {
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

    <div className='our06'>
         <iframe className='our05' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=sinharaja%20boys%20hostel%20complex%20sabaragamuwa%20university,sri%20lanka+(Urban%20Vogue)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a>
         </iframe>

         
         <div className="Our-map">
         <h1>Our Retail Store</h1>
         <p2>Sinharaja-06, Sinharaja boys hostel complex, Sabaragamuwa University Of Sri Lanka | 0752470438 </p2>
         </div>
    </div>
    {/* Footer */}
    <footer className="footer">
        <p>&copy; 2024 Urban Vogue. All rights reserved.</p>
      </footer>
</div>

    )
}
export default Contact
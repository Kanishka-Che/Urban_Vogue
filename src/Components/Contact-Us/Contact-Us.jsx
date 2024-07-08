import React from 'react'
import './Contact-Us.css'
import { NavLink } from 'react-router-dom'
import NavImg from '../../assets/Untitled.png'


const Contact = () => {
    return (
<div className="" >
        <nav>
            <img src={NavImg}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>About Us</li>
                <li>Services/Products</li>

                <li><NavLink  to="/Contact"><button className='buttonNav'></button>Contact Us</NavLink></li>

                <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
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
</div>

    )
}
export default Contact
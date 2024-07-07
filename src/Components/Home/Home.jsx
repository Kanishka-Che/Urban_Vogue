import React from 'react'
import './Home.css'
import NavImg from '../../assets/Untitled.png'
import in01 from 'E:/Urban_Vogue/src/assets/in01.png'
import in02 from 'E:/Urban_Vogue/src/assets/in02.png'
import in03 from 'E:/Urban_Vogue/src/assets/in03.png'
import in04 from 'E:/Urban_Vogue/src/assets/in04.png'
import in05 from 'E:/Urban_Vogue/src/assets/in05.png'
import in06 from 'E:/Urban_Vogue/src/assets/in06.png'
import in07 from 'E:/Urban_Vogue/src/assets/in07.png'
import photo6 from '../../assets/p6.png'
import photo7 from '../../assets/p7.png'
import photo8 from '../../assets/p8.png'
import p1 from '../../assets/in06.png'
import p5 from '../../assets/in07.png'
import p3 from '../../assets/in08.png'
import pn from '../../assets/Untitled.png'
import p9 from 'E:/Urban_Vogue/src/assets/p9.png'
import p10 from 'E:/Urban_Vogue/src/assets/p10.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <nav>
            <img src={NavImg}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>About Us</li>
                <li>Services/Products</li>

                <li><NavLink to="/Contact"><button className='batton02'></button>Contact Us</NavLink></li>

                <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
            </ul>
        </nav>

      <section className="about">
         <h3>About Us</h3>
         <h4>Welcome to Urban Vogue </h4>
         <h1>Celebrate sri lanka</h1>
         <h2>FROM WHEREVER YOU ARE!</h2>
         <p>
             We Ship Worldwide
         </p>
      </section>



      <div className="hero-images">
      <div className="column1">
        <img src={in01} alt="in01.png"/>
        <img src={in02} alt="in02.png"/>
        <img src={in01} alt="in01.png"/>
        <img src={in02} alt="in02.png"/>
      </div>
      <div className="column2">
        <img src={in03} alt="in03.png"/>
        <img src={in04} alt="in04.png"/>
        <img src={in01} alt="in01.png"/>
        <img src={in02} alt="in02.png"/>
      </div>
      <div className="column3">
        
        <img src={in04} alt="in04.png"/>
        <img src={in05} alt="in05.png"/>
        <img src={in01} alt="in01.png"/>
        <img src={in02} alt="in02.png"/>
      </div>
      <div className="column4">
        
        <img src={in06} alt="in06.png"/>
        <img src={in07} alt="in07.png"/>
        <img src={in01} alt="in01.png"/>
        <img src={in02} alt="in02.png"/>
      </div>
      </div>
      
      
      
      <section className='Our-Story'>
      <h2 className='our01'>Our Story</h2>

      <div className="Our-Story01">
      <div className='our02'>
          <img src={p9} alt="p9.png"/>
        </div>
          
         <div className='our03'>
         <h1>Delivery & Exchange</h1>
         <p1>Enjoy easy delivery Island-wide & hassle-free exchanges.</p1> 
         </div>
         </div>


         <div className="Our-Story02">
         <div className='our04'>
          <img src={p10} alt="p10.png"/>
        </div>
          
         <div className='our05'>
         <h1>Gift Vouchers</h1>
         <p1>Surprise your loved ones with the gift of fashion!</p1> 
         </div>
         </div>


        
         

         
       
            
      </section>




 </div>
  )
}

export default Home;
import React from 'react'
import './About-Us.css'
import NavImg from '../../assets/Untitled.png'
import in01 from 'E:/Urban_Vogue/src/assets/in01.png'
import in02 from 'E:/Urban_Vogue/src/assets/in02.png'
import in03 from 'E:/Urban_Vogue/src/assets/in03.png'
import in04 from 'E:/Urban_Vogue/src/assets/in04.png'
import in05 from 'E:/Urban_Vogue/src/assets/in05.png'
import in06 from 'E:/Urban_Vogue/src/assets/in06.png'
import in07 from 'E:/Urban_Vogue/src/assets/in07.png'
import photo6 from 'E:/Urban_Vogue/src/assets/people03.jpg'
import photo7 from 'E:/Urban_Vogue/src/assets/people03.jpg'
import photo8 from 'E:/Urban_Vogue/src/assets/people03.jpg'
import p9 from 'E:/Urban_Vogue/src/assets/p9.png'
import p10 from 'E:/Urban_Vogue/src/assets/p10.png'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
      <div>
          <nav>
              <img src={NavImg}/>
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/About"><button className="batton03"></button>About Us</NavLink></li>
                  <li>Services/Products</li>
  
                  <li><NavLink to="/Contact"><button className="buttonNav"></button>Contact Us</NavLink></li>
  
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
        
  
           <div className="image-section">
          <div className="p6">
            <img src={photo6} alt='p6.png'/>
            
            <h3>N.G.T. Supunsara</h3>
            <p>Graphic Designer</p>
            <p4>He creates visually appealing graphics for AgriGreen Mart’s website, marketing materials, and social media. His creative designs help visually communicate the brand’s message.</p4>
          </div>
           
          <div className="p7">
          <img src={photo7} alt='p7.png'/>
            <h3>A.E. Chathushke</h3>
            <p>Community Engagement Officer</p>
            <p4>He works to strengthen AgriGreen Mart’s relationships with local farming communities and stakeholders. His efforts in community engagement help build a supportive network around AgriGreen Mart’s mission.</p4>
          </div>
  
          <div className="p8">
          <img src={photo8} alt='p8.png'/>
            <h3>H.H.K.K. Nirmana</h3>
            <p>IT Specialist</p>
            <p4>He manages AgriGreen Mart’s IT infrastructure, ensuring smooth and secure online operations. His technical expertise keeps the digital side of the business running efficiently.
            </p4>
          </div>
          </div>      
          </section>
  
  
  
  
   </div>
    )
  }
  
  export default About;
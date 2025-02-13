import React from 'react'
import './About-Us.css'
import photo6 from '../../assets/people01.jpg'
import photo7 from '../../assets/people03.jpg'
import photo8 from '../../assets/people03.jpg'
import p9 from '../../assets/p9.png'
import p10 from '../../assets/p10.png'
import Footer from '../Footer/Footer'


const About = () => {
    return (
      <div>
        
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
          <Footer /> 
   </div>
   
    );
  };
  
  export default About;
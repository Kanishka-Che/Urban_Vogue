import React from 'react'
import './Home.css'
import NavImg from '../../assets/Untitled.png'
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import photo5 from '../../assets/photo5.png'
import photo6 from '../../assets/p6.png'
import photo7 from '../../assets/p7.png'
import photo8 from '../../assets/p8.png'
import p1 from '../../assets/photo1.png'
import p5 from '../../assets/photo5.png'
import p3 from '../../assets/photo3.png'
import pn from '../../assets/Untitled.png'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <nav>
            <img src={NavImg}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li><NavLink to="/login"><button className="buttonNav" >Login</button></NavLink></li>
            </ul>
        </nav>

      <section className="about">
      <h3>About</h3>
      <h4>Welcome to My Website!</h4>
      <h1>We Love To Make Great Things, Things That Matter</h1>
      <p>
        In psychological exploration, understanding human behavior involves delving
        into cognition, emotions, and motivations. Through research, psychologists
        unravel the complexities of thought processes, personality, and mental
        health.
      </p>
      <div className="hero-images">
      <div className="column1">
        <img src={photo1} alt="Photo 1" />
        <img src={photo2} alt="Photo 2" />
      </div>
      <div className="column2">
        <img src={photo3} alt="photo 3"/>
      </div>
      <div className="column3">
        <img src={photo5} alt="Photo 5" />
        <img src={photo4} alt="Photo 4" />
      </div>
      </div>
      
      </section>
      
      <section className="Our-Story">
          <h2>Our Story</h2>
          <h1>Infographics in mass market crowdfunding iterate for clarity, engaging backers with dynamic visuals, refining messaging for optimal campaign success.</h1>

          <p className="our-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li
          </p>
          <div className="buttons">
          <button>Read More</button>
          <button className="button_story">Our Story</button>
          </div>
      </section>

      <section className="Our-number">
          <h2>Our numbers</h2>
          <h1>"Effective crowdfunding strategies, infographic design tips, handshake etiquette, and iterating for mass market success in fundraising campaigns." </h1>

          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, metus nec fringilla accumsan, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>

          <div className="data" >
              <div className="data-first">
                <h2 className="white">120m</h2> 
                <p>cool feature tiles</p>
              </div>
              <div className="data-second">
                  <h2 className="white">10,000</h2> 
                  <p>cool feature tiles</p>
              </div>
              <div className="data-theard">
                  <h2 className="white">240</h2> 
                  <p>cool feature tiles</p>
              </div>
          </div>
      </section>

      <section class="Our-team">
        <h2>Our team</h2>
        <h1>The Leadership team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum volit, sit amet feugiat lectus, Class aptent taciti sociosqu ad litorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tollus. Sed dignissim, metus nec fringilla accumsan, risus sem sndows nterdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li 
        </p>
       
     </section>

     <div className="image-section">
        <div className="p6">
          <img src={photo6} alt='p6.png'/>
          
          <h3>Kanishka</h3>
          <p>General Manager</p>
        </div>
         
        <div className="p7">
        <img src={photo7} alt='p7.png'/>
          <h3>Umesh Bandara</h3>
          <p>General Manager</p>
        </div>

        <div className="p8">
        <img src={photo8} alt='p8.png'/>
          <h3>Chethana</h3>
          <p>General Manager</p>
        </div>
     </div>
     <section className="data-cards">
        <h2>Our team</h2>
        <h1>the leadership team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestia, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin locus, ut interdum tallus allt sed risus. Maecenas eget condimentum velit, sit amet feugiat lactus. Class aptent taciti sociosqu ad llLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a mattis talus. Sed dignissim, metus nec fringilla accumsan, risus son sollicitudin lacus, ut interdum tellus allt sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li
        </p>
        <div className="card-container">
            <div className="card">
                <img src={p1} alt="photo1.png"/>
                <div>
                    <h3 >We are commited</h3>
                <p>
                    tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut Interdum tellus oilt sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus Closs aptent taciti socio
                </p>
                </div>
                

                
            </div>
            <div className="card">
                <img src={p5} alt='photo5.png'/>
                <div>
                    <h3>We are commited</h3>
                <p>
                    tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut Interdum tellus oilt sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus Closs aptent taciti socio

                </p>
                </div>
            </div>
            <div className="card">
                <img src={p3} alt='photo3.png'/>
                <div>
                    <h3>We are responsible</h3>
                <p>
                    tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut Interdum tellus oilt sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus Closs aptent taciti socio
                </p>
                </div>
            </div>

        </div>
    </section>

    <footer className="footer-info">
      <div className="footer-left">
        <img src={pn} alt="Untitled.png" />
        <p className="p-wid">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter</p>
      </div>
      <div className="footer-right">
        <div>
          <h2>Landings</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h2>Resources</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </footer>




 </div>
  )
}

export default Home;
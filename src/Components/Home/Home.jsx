import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import NavImg from '../../assets/Untitled.png';
import in01 from '../../assets/in01.png';
import in02 from '../../assets/in02.png';
import in03 from '../../assets/in03.png';
import in04 from '../../assets/in04.png';
import in05 from '../../assets/in05.png';
import photo6 from '../../assets/p6.png';
import photo7 from '../../assets/p7.png';
import photo8 from '../../assets/p8.png';
import p1 from '../../assets/in06.png';
import p5 from '../../assets/in07.png';
import p3 from '../../assets/in08.png';
import pn from '../../assets/Untitled.png';
import p9 from '../../assets/p9.png';
import p10 from '../../assets/p10.png';

const Home = () => {
  return (
    <div>
      <nav>
        <img src={NavImg} alt="Navigation" />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>About Us</li>
          <li>Services/Products</li>
          <li><NavLink to="/Contact"><button className='batton02'>Contact Us</button></NavLink></li>
          <li><NavLink to="/login"><button className="buttonNav">Login</button></NavLink></li>
        </ul>
      </nav>

      <section className="about">
        <div className='about-cont'>
          <h3>About Us</h3>
          <h4>Welcome to Urban Vogue</h4>
          <h1>Celebrate Sri Lanka</h1>
          <h2>FROM WHEREVER YOU ARE!</h2>
          <p>We Ship Worldwide</p>
        </div>
      </section>

      <section className="about">
        <h3>About</h3>
        <h4>Welcome to Urban Vogue!</h4>
        <h1>We Love To Make Great Things, Things That Matter</h1>
        <p>
          In psychological exploration, understanding human behavior involves delving
          into cognition, emotions, and motivations. Through research, psychologists
          unravel the complexities of thought processes, personality, and mental
          health.
        </p>
        <div className="hero-images">
          <div className="column1">
            <img src={in01} alt="In01" />
            <img src={in02} alt="In02" />
          </div>
          <div className="column2">
            <img src={in03} alt="In03" />
          </div>
          <div className="column3">
            <img src={in04} alt="In04" />
            <img src={in05} alt="In05" />
          </div>
        </div>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <h1>Infographics in mass market crowdfunding iterate for clarity, engaging backers with dynamic visuals, refining messaging for optimal campaign success.</h1>
        <p className="our-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li
        </p>
        <div className="buttons">
          <button>Read More</button>
          <button className="button_story">Our Story</button>
        </div>
      </section>

      <section className="our-number">
        <h2>Our Numbers</h2>
        <h1>"Effective crowdfunding strategies, infographic design tips, handshake etiquette, and iterating for mass market success in fundraising campaigns."</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, metus nec fringilla accumsan, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>
        <div className="data">
          <div className="data-first">
            <h2 className="white">120m</h2>
            <p>cool feature tiles</p>
          </div>
          <div className="data-second">
            <h2 className="white">10,000</h2>
            <p>cool feature tiles</p>
          </div>
          <div className="data-third">
            <h2 className="white">240</h2>
            <p>cool feature tiles</p>
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <h1>The Leadership Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus, Class aptent taciti sociosqu ad litorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li
        </p>
      </section>

      <div className="image-section">
        <div className="p6">
          <img src={photo6} alt="p6" />
          <h3>Kanishka</h3>
          <p>General Manager</p>
        </div>
        <div className="p7">
          <img src={photo7} alt="p7" />
          <h3>Umesh Bandara</h3>
          <p>General Manager</p>
        </div>
        <div className="p8">
          <img src={photo8} alt="p8" />
          <h3>Chethana</h3>
          <p>General Manager</p>
        </div>
      </div>

      <section className="data-cards">
        <h2>Our Team</h2>
        <h1>The Leadership Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad li
        </p>
        <div className="card-container">
          <div className="card">
            <img src={p1} alt="photo1" />
            <div>
              <h3>We are committed</h3>
              <p>
                Tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l
              </p>
            </div>
          </div>
          <div className="card">
            <img src={p5} alt="photo5" />
            <div>
              <h3>We deliver results</h3>
              <p>
                Tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l
              </p>
            </div>
          </div>
          <div className="card">
            <img src={p3} alt="photo3" />
            <div>
              <h3>We are agile</h3>
              <p>
                Tetus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-end">
        <img src={pn} alt="pn" />
        <div className="end-cont">
          <h2>What's Next</h2>
          <h1>We believe in building strong partnerships</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad l
          </p>
        </div>
      </section>

      <section className="footer">
        <h2>Our Numbers</h2>
        <h1>Effective crowdfunding strategies, infographic design tips, handshake etiquette, and iterating for mass market success in fundraising campaigns.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, metus nec fringilla accumsan, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <div className="data">
          <div className="data-first">
            <h2 className="white">120m</h2>
            <p>cool feature tiles</p>
          </div>
          <div className="data-second">
            <h2 className="white">10,000</h2>
            <p>cool feature tiles</p>
          </div>
          <div className="data-third">
            <h2 className="white">240</h2>
            <p>cool feature tiles</p>
          </div>
        </div>
      </section>

      <section className="hero-end">
        <div className="last-pic">
          <img src={p9} alt="p9" />
        </div>
        <div className="last-pic">
          <img src={p10} alt="p10" />
        </div>
      </section>
    </div>
  );
};

export default Home;

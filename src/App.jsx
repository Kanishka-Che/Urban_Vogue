import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Contact from './Components/Contact-Us/Contact-Us';
import About from './Components/About-Us/About-Us';
import Services from './Components/Services/Services';
import NavBar from './Components/Navbar/NavBar'; 
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

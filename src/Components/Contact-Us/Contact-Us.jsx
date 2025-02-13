import React, { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import axios from 'axios';
import './Contact-Us.css';
import NavImg from '../../assets/Untitled.png';
import Footer from '../Footer/Footer';

const Contact = () => {
    // State to handle form input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setResponseMessage('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            <div className="map-container">
                <iframe
                    className="map"
                    title="Urban Vogue Location"
                    width="520"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=sinharaja%20boys%20hostel%20complex%20sabaragamuwa%20university,sri%20lanka+(Urban%20Vogue)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>

            {/* Store Information */}
            <div className="store-info">
                <h1>Our Retail Store</h1>
                <p>
                    📍 Sinharaja-06, Sinharaja Boys Hostel Complex, <br />
                    Sabaragamuwa University Of Sri Lanka <br />
                    📞 Contact: 078-9107363
                </p>
            </div>

            {/* Contact via Email Section */}
            <div className="contact-email">
                <h2>Get in Touch</h2>
                <p>
                    Have questions? Reach out to us via email! <br />
                    <TfiEmail /> <a href="mailto:info@urbanvogue.com">info@urbanvogue.com</a>
                </p>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>

            <Footer />
        </div>
    );
};

export default Contact;

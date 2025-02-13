import React from "react";
import "./Services.css"; 
import Footer from "../Footer/Footer";



const servicesData = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Get free shipping on all orders over $30.",
    icon: "🚚",
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "We offer round-the-clock customer support.",
    icon: "📞",
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days.",
    icon: "🔄",
  },
  {
    id: 4,
    title: "Secure Payment",
    description: "100% secure payment with multiple options.",
    icon: "🔒",
  },
];

const Services = () => {
  return (
    <div className="servicesContainer">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="serviceCards">
        {servicesData.map((service) => (
          <div key={service.id} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;

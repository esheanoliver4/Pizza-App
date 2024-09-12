import React from 'react';
import './About.css'; // Add custom CSS file if needed
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleDisplayPizzas = () => {
    navigate('/display-items');
  };

  return (
    <div className="about-container">
      <header className="hero-section">
        <h1>Welcome to the Pizza Store</h1>
        <p>Order your favorite pizza today and enjoy deliciousness delivered right to your door!</p>
        <button className="btn btn-primary" onClick={handleDisplayPizzas}>Display Pizzas</button>
      </header>

      <h1>About Us</h1>
      <p>Welcome to Pizza Store, where we’ve been serving delicious, handcrafted pizzas since 1999!</p>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          What started as a small family-owned pizzeria has grown into a favorite spot for pizza lovers all over town. 
          We pride ourselves on using the freshest ingredients and traditional cooking methods to create pizzas that 
          are bursting with flavor. Whether it's our classic Margherita or our signature BBQ Chicken pizza, every bite is unforgettable.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>✔ Fresh, high-quality ingredients</li>
          <li>✔ Handcrafted pizzas made with passion</li>
          <li>✔ A commitment to customer satisfaction</li>
          <li>✔ Supporting local farmers and suppliers</li>
        </ul>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to create the best pizza experience possible by combining our love for pizza with a dedication 
          to quality and exceptional service. Whether you're dining in, picking up, or ordering delivery, we want every customer 
          to enjoy a warm slice of pizza made with love.
        </p>
      </section>

      <section className="about-testimonials">
        <h2>What Our Customers Say</h2>
        <p>"The best pizza in town! I’ve been coming here for years and the quality never disappoints." - Sarah W.</p>
        <p>"Friendly staff, fast service, and incredible pizzas. Highly recommend the Pepperoni!" - Michael D.</p>
      </section>
    </div>
  );
}

export default About;

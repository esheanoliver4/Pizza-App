import React from 'react';
import './Contact.css'; // Import custom CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-info">
        We’d love to hear from you! Whether you have a question about our menu, pricing, or anything else, our team is ready to answer all your questions.
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email: <a href="mailto:contact@pizzastore.com">contact@pizzastore.com</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Phone: <a href="tel:+123456789">+123 456 789</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Address: 123 Pizza Lane, Food Town, FL 12345</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

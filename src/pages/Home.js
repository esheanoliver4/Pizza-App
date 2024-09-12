import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import custom CSS for Home component

const Home = () => {
  const navigate = useNavigate();

  // Function to handle button click
  const handleDisplayPizzas = () => {
    navigate('/display-items'); // Navigate to the Display All Items page
  };
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the Pizza Store</h1>
        <p>Order your favorite pizza today and enjoy deliciousness delivered right to your door!</p>
        <button className="btn btn-primary" onClick={handleDisplayPizzas}>Display Pizzas</button>
      </header>

      <section className="popular-pizzas">
        <h2>Our Popular Pizzas</h2>
        <div className="pizza-list">
          <div className="pizza-item">
            <h3>Margherita</h3>
            <p>A classic pizza with fresh tomatoes, mozzarella, and basil.</p>
          </div>
          <div className="pizza-item">
            <h3>Pepperoni</h3>
            <p>Loaded with spicy pepperoni slices and mozzarella cheese.</p>
          </div>
          <div className="pizza-item">
            <h3>BBQ Chicken</h3>
            <p>Tender chicken pieces with BBQ sauce, red onions, and cilantro.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Pizza Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteItem = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizzaId, setSelectedPizzaId] = useState('');
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  // Fetch all pizzas for the dropdown list
  useEffect(() => {
    axios.get('http://localhost:3001/items')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => {
        console.error('Error fetching pizzas:', error);
      });
  }, []);

  // Handle deletion of the selected pizza
  const handleDelete = () => {
    if (selectedPizzaId) {
      axios.delete(`http://localhost:3001/items/${selectedPizzaId}`)
        .then(() => {
          alert('Pizza deleted successfully!');
          setPizzas(pizzas.filter(pizza => pizza.id !== selectedPizzaId));
          setSelectedPizzaId('');
          setNotFound(false);
          navigate('/display-items'); // Navigate to Display All Items page
        })
        .catch(error => {
          console.error('Error deleting pizza:', error);
          setNotFound(true);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Delete Pizza Item</h2>

      {/* Dropdown to select a pizza */}
      <div className="mb-3">
        <label htmlFor="pizzaSelect" className="form-label">Select Pizza:</label>
        <select
          id="pizzaSelect"
          className="form-select"
          value={selectedPizzaId}
          onChange={(e) => setSelectedPizzaId(e.target.value)}
        >
          <option value="">Select a pizza</option>
          {pizzas.map(pizza => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>
      </div>

      {/* Delete button */}
      <button
        className="btn btn-danger"
        onClick={handleDelete}
        disabled={!selectedPizzaId}
      >
        Delete Pizza
      </button>

      {/* Show not found message if pizza is not found */}
      {notFound && (
        <div className="alert alert-danger mt-3">Pizza not found or could not be deleted!</div>
      )}
    </div>
  );
};

export default DeleteItem;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UpdateItem = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizzaId, setSelectedPizzaId] = useState('');
  const [pizza, setPizza] = useState(null);
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

  // Fetch pizza details by ID
  useEffect(() => {
    if (selectedPizzaId) {
      axios.get(`http://localhost:3001/items/${selectedPizzaId}`)
        .then(response => {
          setPizza(response.data);
          setNotFound(false);
        })
        .catch(error => {
          console.error('Error fetching pizza details:', error);
          setNotFound(true);
        });
    }
  }, [selectedPizzaId]);

  // Handle form submission for updating pizza details
  const handleSubmit = (values) => {
    axios
      .put(`http://localhost:3001/items/${pizza.id}`, values)
      .then(() => {
        alert('Pizza updated successfully!');
        navigate('/display-items'); // Navigate back to the items page
      })
      .catch((error) => {
        console.error('Error updating pizza:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Update Pizza Item</h2>

      {/* Step 1: Dropdown to select a pizza */}
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

      {/* Step 2: Show pizza details for update if a pizza is selected */}
      {pizza && (
        <Formik
          initialValues={{ name: pizza.name, price: pizza.price }}
          validationSchema={Yup.object({
            name: Yup.string().required('Pizza name is required'),
            price: Yup.number().required('Price is required').positive('Price must be positive'),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Pizza Name:</label>
              <Field type="text" className="form-control" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Pizza Price:</label>
              <Field type="number" className="form-control" id="price" name="price" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-success">Update Pizza</button>
          </Form>
        </Formik>
      )}

      {/* Step 3: Show not found message if pizza is not found */}
      {notFound && (
        <div className="alert alert-danger mt-3">Pizza not found!</div>
      )}
    </div>
  );
};

export default UpdateItem;

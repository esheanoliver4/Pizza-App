import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddNewItem.css'; // Add custom CSS file

const AddNewItem = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    price: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
  });

  const onSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:3001/items', values)
      .then(response => {
        alert('Item added successfully');
        resetForm();
        navigate('/display-items'); // Navigate to Display All Items page
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="add-item-container">
      <div className="form-card">
        <h1 className="form-header">Add New Pizza</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="form-body">
            <div className="form-group">
              <label htmlFor="name">Pizza Name</label>
              <Field type="text" id="name" name="name" className="form-input" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price ($)</label>
              <Field type="text" id="price" name="price" className="form-input" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>
            <button type="submit" className="btn-submit">Add Pizza</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddNewItem;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayAllItems.css'; // Add custom CSS file if needed

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="items-container">
      <h1 className="items-header">All Pizza Items</h1>
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayAllItems;

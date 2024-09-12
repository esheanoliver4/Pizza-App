import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DisplayAllItems from './pages/DisplayAllItems';
import AddNewItem from './pages/AddNewItem';
import UpdateItem from './pages/UpdateItem';
import DeleteItem from './pages/DeleteItem';
import Contact from './pages/Contact';

function App() {
  return (
        <Router>
      <Navbar />
      <title>Hello</title>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/display-items" element={<DisplayAllItems />} />
          <Route path="/add-item" element={<AddNewItem />} />
          <Route path="/update-item/" element={<UpdateItem />} />
          <Route path="/delete-item/" element={<DeleteItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

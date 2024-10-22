import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products'; // Import Products component
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <Router>
      <div>
        {/* You can add the Navbar here to make it visible on all pages */}
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/home" element={<Home />} /> {/* Home page */}
          <Route path="/cart" element={<Cart />} /> {/* Cart page */}
          <Route path="/products" element={<Products />} /> {/* Products page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

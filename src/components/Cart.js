import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [storedProduct, setStoredProduct] = useState(null);

  // Updated product list including all items
  const productList = [
    { name: 'Red Chilly', type: 'Spices', price: 100 },
    { name: 'Sesame Seeds', type: 'Oil Seeds', price: 90 }, 
    { name: 'Chickpeas', type: 'Pulses & Grains', price: 70 }, 
    { name: 'Sunflower Seeds', type: 'Oil Seeds', price: 80 }, 
    { name: 'Turmeric', type: 'Spices', price: 110 }, 
    { name: 'Senna Leaves', type: 'Herbs', price: 60 }, 
    { name: 'Moong Dal', type: 'Pulses & Grains', price: 50 }, 
    { name: 'Raisins', type: 'Dry Fruits', price: 150 }, 
    { name: 'Black Pepper', type: 'Spices', price: 200 },
    { name: 'Cotton Seeds', type: 'Oil Seeds', price: 95 }, 
    { name: 'Toor Dal', type: 'Pulses & Grains', price: 65 }, 
    { name: 'Cashew Nuts', type: 'Dry Fruits', price: 250 },
    { name: 'Almonds', type: 'Dry Fruits', price: 200 },
    { name: 'Mukhwas', type: 'Food Products', price: 100 }, 
    { name: 'Jaggery', type: 'Food Products', price: 50 }, 
    { name: 'Pickle', type: 'Food Products', price: 75 }, 
    { name: 'Oregano', type: 'Herbs', price: 70 }, 
    { name: 'Basil', type: 'Herbs', price: 80 }, 
  ];

  const addItemToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevCartItems.map(item => 
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
    
    setSuccessMessage(`${product.name} added successfully!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  useEffect(() => {
    const storedProductNames = localStorage.getItem('selectProduct');

    if (storedProductNames) {
      const productNamesArray = JSON.parse(storedProductNames);
      productNamesArray.forEach((storedProductName) => {
        const foundProduct = productList.find(p => p.name === storedProductName);
        if (foundProduct) {
          setSelectedProduct(foundProduct);
          addItemToCart(foundProduct);
          const updatedProductNamesArray = productNamesArray.filter(name => name !== storedProductName);
          if (updatedProductNamesArray.length > 0) {
            localStorage.setItem('selectProduct', JSON.stringify(updatedProductNamesArray));
          } else {
            localStorage.removeItem('selectProduct');
          }
        }
      });
    }
  }, [productList, addItemToCart]);

  const increaseQuantity = (name) => {
    setCartItems(cartItems.map(item => 
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (name) => {
    setCartItems(cartItems.map(item => 
      item.name === name && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const handleBuy = () => {
    setShowPopup(true); // Show the popup
    // Here we can choose to remove items or keep them in state until the popup is closed
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
    setCartItems([]); // Clear cart only when closing the popup
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-white p-2 text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="fas fa-envelope text-blue-600 mr-1"></i>
            <span>Email: <a href="mailto:sales@royaldryfruit.com" className="text-green-600">sales@royaldryfruit.com</a></span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-mobile-alt text-blue-600 mr-1"></i>
            <span>Mobile: +91 8451878725</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span>Follow Us On:</span>
          <a href="#" className="text-gray-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-gray-600"><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>

      <Navbar />

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Product to Cart</h2>
        <select 
          className="border rounded-lg p-2 mb-4"
          onChange={(e) => setSelectedProduct(productList.find(p => p.name === e.target.value))}
          value={selectedProduct ? selectedProduct.name : ""}
        >
          <option value="">Select a Product</option>
          {productList.map((product) => (
            <option key={product.name} value={product.name}>{product.name}</option>
          ))}
        </select>
        <button onClick={() => addItemToCart(selectedProduct)} className="bg-green-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border-b">SR No</th>
              <th className="py-2 border-b">Product Name</th>
              <th className="py-2 border-b">Type</th>
              <th className="py-2 border-b">Quantity</th>
              <th className="py-2 border-b">Price</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.type}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">₹ {item.price * item.quantity}</td>
                <td className="py-2">
                  <button onClick={() => increaseQuantity(item.name)} className="bg-green-500 text-white py-2 px-4 rounded">+</button>
                  <button onClick={() => decreaseQuantity(item.name)} className="bg-orange-500 text-white py-2 px-4 rounded">-</button>
                  <button onClick={() => removeItem(item.name)} className="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Centered Buy Now Button */}
        <div className="flex justify-center mt-8">
          <button onClick={handleBuy} className="bg-green-500 text-white py-2 px-6 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>

      {/* Popup for purchase confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Purchase</h3>
            <p className="mt-2">Are you sure you want to purchase these items?</p>
            <div className="flex justify-between mt-4">
              <button onClick={closePopup} className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
              <button onClick={() => {
                closePopup();
                setCartItems([]); // Clear cart only when confirmed
                setSuccessMessage("Purchase successful! Thank you for your order.");
                setTimeout(() => setSuccessMessage(""), 3000);
              }} className="bg-green-500 text-white py-2 px-4 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Success message display */}
      {successMessage && (
        <div className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default Cart;

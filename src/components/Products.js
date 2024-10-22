import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component

function Products() {
  const allProducts = [
    { name: 'Red Chilly', imgSrc: 'https://www.royaldryfruit.com/images/chillies-exporter.jpg', category: 'Spices' },
    { name: 'Sesame Seeds', imgSrc: 'https://www.royaldryfruit.com/images/natural-sesame-seeds.jpg', category: 'Oil Seeds' },
    { name: 'Chickpeas', imgSrc: 'https://www.royaldryfruit.com/images/chick-peas.jpg', category: 'Pulses & Grains' },
    { name: 'Sunflower Seeds', imgSrc: 'https://www.royaldryfruit.com/images/sunflower-seeds.jpg', category: 'Oil Seeds' },
    { name: 'Turmeric', imgSrc: 'https://www.royaldryfruit.com/images/turmeric.jpg', category: 'Spices' },
    { name: 'Senna Leaves', imgSrc: 'https://www.royaldryfruit.com/images/senna-leaves.jpg', category: 'Herbs' },
    { name: 'Moong Dal', imgSrc: 'https://www.royaldryfruit.com/images/moong-dal.jpg', category: 'Pulses & Grains' },
    { name: 'Raisins', imgSrc: 'https://www.royaldryfruit.com/images/raisins.jpg', category: 'Dry Fruits' },
    { name: 'Black Pepper', imgSrc: 'https://www.royaldryfruit.com/images/black-pepper.jpg', category: 'Spices' },
    { name: 'Cotton Seeds', imgSrc: 'https://www.royaldryfruit.com/images/cotton-seeds.jpg', category: 'Oil Seeds' },
    { name: 'Toor Dal', imgSrc: 'https://www.royaldryfruit.com/images/toor-dal.jpg', category: 'Pulses & Grains' },
    { name: 'Cashew Nuts', imgSrc: 'https://www.royaldryfruit.com/images/cashewnuts.jpg', category: 'Dry Fruits' },
    { name: 'Almonds', imgSrc: 'https://www.royaldryfruit.com/images/almonds.jpg', category: 'Dry Fruits' },
    { name: 'Mukhwas', imgSrc: 'https://www.royaldryfruit.com/images/mukhwas.jpg', category: 'Food Products' },
    { name: 'Jaggery', imgSrc: 'https://www.royaldryfruit.com/images/pickle.jpg', category: 'Food Products' },
    { name: 'Pickle', imgSrc: 'https://www.royaldryfruit.com/images/jaggery.jpg', category: 'Food Products' },
    { name: 'Oregano', imgSrc: 'https://www.royaldryfruit.com/images/oregano.jpg', category: 'Herbs' },
    { name: 'Basil', imgSrc: 'https://www.royaldryfruit.com/images/basil.jpg', category: 'Herbs' },
  ];

  const categories = ['All', 'Spices', 'Oil Seeds', 'Pulses & Grains', 'Dry Fruits', 'Food Products', 'Herbs'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory).slice(0, 3); // Show only 3 products for specific categories
    
    const handleProductClick = (productName) => {
        // Step 1: Get the existing products from the 'selectProduct' key in localStorage
        let products = localStorage.getItem('selectProduct');
    
        // Step 2: Parse the retrieved data or initialize an empty array if no products exist
        products = products ? JSON.parse(products) : [];
    
        // Step 3: Append the new product to the array
        products.push(productName);
    
        // Step 4: Save the updated array back to the same 'selectProduct' key in localStorage
        localStorage.setItem('selectProduct', JSON.stringify(products));
    
        console.log('Updated product list:', products);
    };
    
  return (
    <div className="container mx-auto p-4">
      {/* Contact Information */}
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

      {/* Navbar Component */}
      <Navbar />

      {/* Tabs for product categories */}
      <div className="flex justify-center mb-4">
        {categories.map(category => (
          <div 
            key={category} 
            className={`tab ${selectedCategory === category ? 'active' : 'inactive'}`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div className="relative group" key={product.name}>
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="text-white text-lg mb-2">{product.name}</span>
              <div className="absolute bottom-4 right-4 flex flex-col items-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center" onClick={()=>handleProductClick(product.name)}>
                  <i className="fas fa-shopping-cart mr-1 text-xl"></i> {/* Increased icon size */}
                </button>
                <span className="text-white text-sm mt-1">Add to Cart</span> {/* Text below the icon */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline styles */}
      <style>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }

          .breadcrumb {
            color: #000;
            text-decoration: none;
          }
          .breadcrumb:hover {
            text-decoration: underline;
          }
          .tab {
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .tab.active {
            background-color: #2c3e50;
            color: #fff;
          }
          .tab.inactive {
            background-color: #f1f1f1;
            color: #000;
          }
          .tab:hover {
            transform: scale(1.1);
            background-color: #d1d1d1;
          }
        `}
      </style>
    </div>
  );
}

export default Products;

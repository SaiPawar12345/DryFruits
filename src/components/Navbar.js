import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link


function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
      setActiveSubDropdown(null); // Reset active submenu
    }, 1000); // Set timeout for 1 second
    setTimeoutId(id); // Store the timeout ID
  };

  const handleSubDropdownEnter = (category) => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setActiveSubDropdown(category); // Set the active sub dropdown
  };

  const handleSubDropdownLeave = () => {
    const id = setTimeout(() => {
      setActiveSubDropdown(null); // Reset active submenu
    }, 500); // Set timeout for 1 second
    setTimeoutId(id); // Store the timeout ID
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4">
        <img src="logo.png" alt="Royal Divine Produce Products LLP logo with nuts and spices" className="h-20" />
        <div className="flex space-x-4">
          <a href="/home" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500 rounded">Home</a>
          <a href="#" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500  rounded">About Us</a>

          {/* Products Dropdown */}
          <div
            className="relative z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500 rounded inline-flex items-center">
              Products <i className="fas fa-caret-down ml-2"></i>
            </Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                {/* Spices Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubDropdownEnter('spices')}
                  onMouseLeave={handleSubDropdownLeave}
                >
                  <div className="my-1 bg-green-600 rounded shadow">
                    <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                      Spices <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {activeSubDropdown === 'spices' && (
                    <div className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg transition-opacity duration-500 opacity-100">
                      {[
                        'Red Chilly', 'Turmeric Powder', 'Curry Powder', 'Coriander Seeds',
                        'Fenugreek Seeds', 'Fennel Seeds', 'Dill Seeds', 'Cumin Seeds',
                        'Black Pepper', 'Bay Leaves', 'Ajwain', 'Cardamom', 'Nutmeg',
                        'Celery Seeds', 'Mustard Seeds', 'Nigella Seeds', 'Annatto Seeds', 'Ginger'
                      ].map((spice, index) => (
                        <div key={index} className="my-1 bg-green-600 rounded shadow">
                          <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                            {spice}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Oil Seeds Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubDropdownEnter('oilSeeds')}
                  onMouseLeave={handleSubDropdownLeave}
                >
                  <div className="my-1 bg-green-600 rounded shadow">
                    <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                      Oil Seeds <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {activeSubDropdown === 'oilSeeds' && (
                    <div className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg transition-opacity duration-500 opacity-100">
                      {[
                        'Natural Sesame Seeds', 'Hulled Sesame Seeds', 'Black Sesame Seeds', 'Golden Sesame Seeds',
                        'Brown Sesame Seeds', 'Niger Seeds', 'Cotton Seeds', 'Flax Seeds'
                      ].map((seed, index) => (
                        <div key={index} className="my-1 bg-green-600 rounded shadow">
                          <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                            {seed}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pulses & Grains Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubDropdownEnter('pulsesGrains')}
                  onMouseLeave={handleSubDropdownLeave}
                >
                  <div className="my-1 bg-green-600 rounded shadow">
                    <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                      Pulses & Grains <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {activeSubDropdown === 'pulsesGrains' && (
                    <div className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg transition-opacity duration-500 opacity-100">
                      {[
                        'Chick Peas', 'Moong Dal', 'Urad Dal', 'Chana Dal', 'Toor Daal', 'Masoor Daal', 'Rice',
                        'Bajra', 'Jowar', 'Black Eyed Peas'
                      ].map((pulse, index) => (
                        <div key={index} className="my-1 bg-green-600 rounded shadow">
                          <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                            {pulse}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dry Fruits Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubDropdownEnter('dryFruits')}
                  onMouseLeave={handleSubDropdownLeave}
                >
                  <div className="my-1 bg-green-600 rounded shadow">
                    <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                      Dry Fruits <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {activeSubDropdown === 'dryFruits' && (
                    <div className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg transition-opacity duration-500 opacity-100">
                      {[
                        'Apricots', 'Almonds', 'Black Raisins with Seeds', 'Brown Walnuts', 'Cashew Nuts', 
                        'Cardamom Elaichi', 'Chili Cashew Nuts', 'Chutney Cashew Nuts', 'Cinnamon', 
                        'Clove', 'Cranberry', 'Dates'
                      ].map((fruit, index) => (
                        <div key={index} className="my-1 bg-green-600 rounded shadow">
                          <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                            {fruit}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Food Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubDropdownEnter('foodProducts')}
                  onMouseLeave={handleSubDropdownLeave}
                >
                  <div className="my-1 bg-green-600 rounded shadow">
                    <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                      Food Products <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {activeSubDropdown === 'foodProducts' && (
                    <div className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg transition-opacity duration-500 opacity-100">
                      {[
                        'Organic Sugar', 'Sugar', 'Salt', 'Groundnut Oil', 'Vegetable Oil', 
                        'Coconut Oil', 'Mustard Oil', 'Sundried Green Chutney', 'Sundried Red Chutney',
                        'Sundried Garlic Chutney'
                      ].map((product, index) => (
                        <div key={index} className="my-1 bg-green-600 rounded shadow">
                          <a href="#" className="block px-4 py-2 border border-green-400 text-white hover:bg-green-500">
                            {product}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500  rounded">Corporate Gifting</a>
          <a href="#" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500  rounded">Quality</a>
          <a href="/cart" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500  rounded">Cart</a>
          <a href="#" className="px-4 py-2 border border-green-400 bg-white-600 text-black hover:bg-green-500  rounded">Contact Us</a>

        </div>
      </div>
    </div>
  );
}

export default Navbar;

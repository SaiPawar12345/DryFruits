import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSpicesDropdownOpen, setSpicesDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSpicesMouseEnter = () => {
    setSpicesDropdownOpen(true);
  };

  const handleSpicesMouseLeave = () => {
    setSpicesDropdownOpen(false);
  };

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4">
        <img src="logo.png" alt="Royal Divine Produce Products LLP logo with nuts and spices" className="h-20" />
        <div className="flex space-x-4">
          <a href="#" className="px-4 py-2 border border-gray-300 hover:bg-green-500 hover:text-white rounded">Home</a>
          <a href="#" className="px-4 py-2 bg-blue-900 text-white hover:bg-green-500 rounded">About Us</a>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="px-4 py-2 border border-gray-300 hover:bg-green-500 hover:text-white rounded">
              Products <i className="fas fa-caret-down"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                <div className="my-1 bg-green-500 rounded shadow">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Spices <i className="fas fa-caret-right"></i>
                  </a>
                </div>
                {['Oil Seeds', 'Pulses & Grains', 'Dry Fruits', 'Food Products', 'Herbs'].map((item, index) => (
                  <div key={item} className="my-1 bg-green-500 rounded shadow">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="px-4 py-2 border border-gray-300 hover:bg-green-500 hover:text-white rounded">Corporate Gifting</a>
          <a href="#" className="px-4 py-2 border border-gray-300 hover:bg-green-500 hover:text-white rounded">Quality</a>
          <a href="#" className="px-4 py-2 border border-gray-300 hover:bg-green-500 hover:text-white rounded">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

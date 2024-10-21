import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component

function Home() {
  return (
    <div className="w-full">
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

      {/* Additional Home content */}

    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import Navbar from './Navbar'; // Ensure Navbar is correctly imported

function Home() {
  const images = [
    {
      src: 'almonds.jpg', // Ensure these paths are correct
      caption: 'Premium Quality Grade A Almonds Nuts',
    },
    {
      src: 'cashews.jpg',
      caption: 'Exclusive Dry Fruits Collections',
    },
    {
      src: 'cereals.jpg',
      caption: 'We Offer Quality Cereals and Spices with 100% Customer Satisfaction',
    },
    {
      src: 'dontknow.jpg',
      caption: 'Leading Stocklist of Pulses and Grains',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {/* Inline Styles for Carousel */}
      <style>
        {`
          .carousel {
            position: relative;
            width: 100%;
            margin: auto;
          }
          .carousel img {
            width: 100%;
            height: auto;
          }
          .carousel-caption {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
          }
          .carousel-control-prev,
          .carousel-control-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
            cursor: pointer;
          }
          .carousel-control-prev {
            left: 10px;
          }
          .carousel-control-next {
            right: 10px;
          }
          .carousel-indicators {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 5px;
          }
          .carousel-indicators div {
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>

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

      {/* Carousel Section */}
      <div className="carousel w-full flex justify-center relative">
        <img src={images[currentIndex].src} alt={images[currentIndex].caption} className="w-full max-w-[80%] object-cover" />
        <div className="carousel-caption">{images[currentIndex].caption}</div>
        <div className="carousel-control-prev" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel-control-next" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="carousel-indicators flex justify-center space-x-2 mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Company Information Section */}
      <div className="container mx-auto p-4">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">WELCOME TO THE ROYALDIVINE PRODUCE <span className="text-blue-800">PRODUCTS</span> LLP</h1>
          <p className="w-3/5 mx-auto mt-4 text-gray-600">We genuinely trust that clients are in charge of achievement of any association and are dedicated to give quality products and operations to our customers before conferred time span.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 flex">
          <div className="w-1/3 bg-gray-100 p-4">
            <h2 className="w-3/5 mx-auto text-2xl font-bold text-gray-800">ABOUT <span className="text-blue-800">US</span></h2>
            <p className="w-3/5 mx-auto text-gray-600 mt-2">Company Profile</p>
            <hr className="w-4/5 mx-auto border-t-2 border-green-500 my-4" />
            <p className="w-3/5 mx-auto text-gray-600">We are unequivocally dedicated to give quality products and operations to our customers before conferred time span. Our workforce and experienced group are exclusively in charge of development and achievement of association.</p>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="mb-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center w-32 h-32 justify-center">
                <i className="fas fa-leaf mr-2"></i> About Us
              </button>
            </div>
            <div className="mb-4">
              <button className="bg-white text-gray-800 py-2 px-4 rounded flex items-center border border-gray-300 w-32 h-32 justify-center">
                <i className="fas fa-eye mr-2"></i> Vision
              </button>
            </div>
            <div>
              <button className="bg-white text-gray-800 py-2 px-4 rounded flex items-center border border-gray-300 w-32 h-32 justify-center">
                <i className="fas fa-cogs mr-2"></i> Mission
              </button>
            </div>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <img src="i3.jpg" alt="Various bowls of nuts and dry fruits arranged in a circle with a Royal Nuts & Dry Fruits logo in the center" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 text-white p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">ABOUT US</h2>
            <p className="mb-4">
              We are unequivocally dedicated to give quality products and operations to our customers before conferred time span. Our workforce and experienced group are exclusively in charge of development and achievement of association.
            </p>
            <div className="flex space-x-2 mb-2">
              <a href="#" className="bg-blue-600 p-2 rounded text-white flex items-center space-x-2">
                <i className="fab fa-facebook-f"></i>
                <span>LIKE US</span>
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded text-white flex items-center space-x-2">
                <i className="fab fa-twitter"></i>
                <span>FOLLOW US</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">PRODUCTS</h2>
            <ul>
              <li>Dry Fruits</li>
              <li>Nuts</li>
              <li>Cereals</li>
              <li>Spices</li>
              <li>Pulses</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">CONTACT</h2>
            <p className="mb-4">Email: sales@royaldryfruit.com</p>
            <p>Mobile: +91 8451878725</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Royal Dry Fruit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

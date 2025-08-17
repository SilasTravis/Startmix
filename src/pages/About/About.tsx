import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Welcome to StartMix, your one-stop destination for high-quality products and exceptional service.
        </p>
        <p className="text-gray-700">
          Our mission is to provide our customers with the best shopping experience possible. We're committed to
          offering a wide selection of products, competitive prices, and outstanding customer service.
        </p>
      </div>
    </div>
  );
};

export default About;

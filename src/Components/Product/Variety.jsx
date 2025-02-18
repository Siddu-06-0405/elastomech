import React, { useState, useEffect } from "react";
import { Products } from "../Data/Products";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import the icons for the carousel navigation

const Variety = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-sm p-6 w-full">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Types Available</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedProduct.variety.map((variety, index) => (
          <div
            key={index}
            className="relative bg-white hover:shadow-sm border border-gray-200 rounded-md overflow-hidden transition-shadow duration-300"
          >
            {/* Check if variety has multiple images */}
            <VarietyCarousel images={variety.image} name={variety.name} />

            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{variety.name}</h4>
              {/* <button className="absolute bottom-4 right-4 text-sm px-3 py-1 bg-[#ffda31] text-white rounded-full shadow-md transition-colors duration-300 cursor-pointer">
                View Details
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VarietyCarousel = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image every 3 seconds (3000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to the last image
  };

  return (
    <div className="relative w-full h-64">
      {/* Carousel Image */}
      <img
        src={images[currentIndex]}
        alt={`${name} image`}
        className="w-full h-full object-cover transition-all duration-300"
      />
      {/* Carousel Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ArrowBack />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ArrowForward />
          </button>
        </>
      )}
    </div>
  );
};

export default Variety;

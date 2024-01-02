import React from "react";
import { Link } from "react-router-dom";
import { products } from "../constants/products";

const Gallery = () => {
  // Extracting product images and IDs from the products array
  const galleryData = products.map((product) => ({
    id: product.id,
    img: product.img,
  }));

  return (
    <div className="p-5 md:p-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-4xl font-semibold mb-8">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryData.map((item, index) => (
            <Link to={`/products/${item.id}`} key={index}>
              <div className="overflow-hidden rounded-lg shadow-lg bg-white transition-transform hover:scale-105 duration-300 transform origin-center">
                <img
                  src={item.img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover object-center rounded-t-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

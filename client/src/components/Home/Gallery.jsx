import React from "react";
import { products } from "../../constants/products";

const Gallery = () => {
  return (
    <div className="py-10 px-10" id="gallery">
      <h1 className="text-4xl text-center font-semibold">Gallery</h1>
      <div className="flex flex-wrap justify-evenly">
        {products.map((product) => {
          return (
            <div className="shadow-xl rounded-xl p-4">
              <img src={product.img} alt={product.name} className="w-72 h-72 p-2 hover:p-0 transition-all" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

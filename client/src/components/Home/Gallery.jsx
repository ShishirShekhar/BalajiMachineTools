import React from "react";
import { products } from "../../constants/products";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="py-10 px-10" id="gallery">
      <h1 className="text-4xl text-center font-semibold">Gallery</h1>
      <div className="flex flex-wrap justify-evenly">
        {products.slice(0, 8).map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <div className="shadow-xl rounded-xl p-4" key={product.img}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-72 h-72 p-2 hover:p-0 transition-all"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import { products } from "../../constants/products";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="py-10 px-5 md:px-10" id="gallery">
      <h1 className="text-4xl text-center font-semibold py-10">Gallery</h1>
      <div className="flex flex-wrap justify-evenly gap-5">
        {products.slice(0, 8).map((product) => {
          return (
            <div
              className="box-shadow rounded-xl p-4 w-40 h-40 md:w-72 md:h-72"
              key={product.id}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full p-2 hover:p-0 transition-all"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

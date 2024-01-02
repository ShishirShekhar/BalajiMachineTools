import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ title, products }) => {
  return (
    <div className="py-10 px-5 md:px-10 text-4xl featured-products">
      <h1 className="text-center font-semibold">{title}</h1>
      <div className="flex flex-wrap gap-5 justify-around py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="featured-product w-40 h-40 md:w-64 md:h-64 box-shadow rounded-xl relative overflow-hidden bg-white">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full absolute p-4"
        />
        <div className="overlay transition absolute -bottom-full w-full h-full bg-blue-500 bg-opacity-90">
          <p className="text text-lg text-center absolute top-1/2 left-1/2 text-white w-full px-4 font-bold">
            {product.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProducts;

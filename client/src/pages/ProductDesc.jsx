import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import ProductDetail from "../components/ProductDesc/ProductDetail";
import Table from "../components/ProductDesc/Table";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[30rem] md:h-[32rem]">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10">
      <ProductDetail product={product} />

      <div className="py-5 pt-10">
        <h1 className="text-2xl pb-2">Technical Specification:</h1>
        <div className="overflow-scroll">
          {Object.keys(product.specifications).length ? (
            <Table product={product} />
          ) : (
            <div>
              <p>This product's technical specifications are not available.</p>
              <p>Please contact us for more information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

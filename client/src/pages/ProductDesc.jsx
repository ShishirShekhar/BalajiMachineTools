import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import ProductCard from "../components/ProductDesc/ProductCard";
import Table from "../components/ProductDesc/Table";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div className="py-10 px-10">
      {product === undefined ? (
        <div className="flex items-center justify-center h-[30rem] md:h-[32rem]">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Product Not Found
          </h1>
        </div>
      ) : (
        <Fragment>
          <ProductCard product={product} />

          <div className="py-5 pt-10">
            <h1 className="text-2xl pb-2">Technical Specification:</h1>
            <div className=" overflow-scroll">
              {Object.keys(product.specifications).length ? (
                <Table product={product} />
              ) : (
                <div>
                  <p>
                    This product technical specifications are not available.
                  </p>
                  <p>Please contact us for more info.</p>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Product;

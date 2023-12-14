import ProductCard from "../components/Product/ProductCard";
import { products } from "../constants/products";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-wrap justify-evenly gap-10 py-10 px-5 sm:px-10 md:px-0">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

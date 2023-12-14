import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { products } from "../constants/products";

const Products = () => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleSearch = () => {
      search === ""
        ? setSearchProducts(products)
        : setSearchProducts((prev) =>
            prev.filter((item) => {
              const nameMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase());
              const categoryMatch = item.category
                .toLowerCase()
                .includes(search.toLowerCase());
              return nameMatch || categoryMatch;
            })
          );
    };

    handleSearch();
  }, [search]);

  return (
    <div className="min-h-screen py-10 px-5 sm:px-10 md:px-0">
      <div className="flex justify-center items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search product by their name or category"
          className="shadow-xl rounded focus:outline-none w-11/12 px-2 py-4"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-wrap justify-evenly gap-10 py-10">
        {searchProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

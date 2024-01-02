import { useState, useEffect } from "react";
import ProductCard from "../components/Product/ProductCard";
import { products } from "../constants/products";
import { categories } from "../constants/products";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const handleFilter = () => {
      const filtered = products.filter((product) => {
        const searchTerm = searchQuery.toLowerCase();
        const categoryMatch = selectedCategory.toLowerCase();
        return (
          (!searchTerm ||
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)) &&
          (!categoryMatch || product.category.toLowerCase() === categoryMatch)
        );
      });
      setFilteredProducts(filtered);
    };

    // Initial filtering and update on changes
    handleFilter();
  }, [products, searchQuery, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    selectedCategory === e.target.value
      ? setSelectedCategory("")
      : setSelectedCategory(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <div className="w-full bg-blue-500 pb-5 px-5">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search product by their name or category"
            className="rounded focus:outline-none w-full px-5 py-2"
            onChange={handleSearchChange}
          />
          <button className="bg-yellow-500 h-full absolute top-0 right-0 rounded flex items-center px-4">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex gap-2 p-2 whitespace-nowrap overflow-scroll border-b-2">
        {categories.map((category) => (
          <button
            className={`category border border-black shadow rounded px-2 ${
              category === selectedCategory ? "bg-blue-500 text-white" : ""
            }`}
            value={category}
            key={category}
            onClick={handleCategoryChange}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly gap-10 py-10 px-5 md:px-10">
        {filteredProducts.map((product) => (
          <div className="px-4 md:px-0 w-full md:w-64" key={product.id}>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

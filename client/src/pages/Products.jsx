import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { products } from "../constants/products";
import { categories } from "../constants/products";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  useEffect(() => {
    const initialProducts =
      search === ""
        ? products
        : products.filter((item) => {
            const nameMatch = item.name
              .toLowerCase()
              .includes(search.toLowerCase());
            const categoryMatch = item.category
              .toLowerCase()
              .includes(search.toLowerCase());
            return nameMatch || categoryMatch;
          });

    const handleFilter = () => {
      const filteredProducts =
        selectedCategory.length === 0
          ? initialProducts
          : initialProducts.filter((item) => {
              console.log(selectedCategory);
              return item.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase());
            });

      setSearchProducts(filteredProducts);
    };

    handleFilter();
  }, [selectedCategory, search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRadioChange = (e) => {
    e.target.value === selectedCategory
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
            value={search}
            onChange={handleChange}
          />
          <button className="bg-yellow-500 h-full absolute top-0 right-0 rounded flex items-center px-4">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="filter flex gap-2 p-2 whitespace-nowrap overflow-scroll border-b-2">
        {categories.map((category) => (
          <button
            className={`border border-black shadow rounded px-2 ${
              category === selectedCategory ? "bg-blue-500 text-white" : ""
            }`}
            value={category}
            key={category}
            onClick={handleRadioChange}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly gap-10 py-10 px-5 md:px-10">
        {searchProducts.map((product) => (
          <div className="px-4 md:px-0 w-full md:w-64" key={product.id}>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

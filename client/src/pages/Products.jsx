import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { products } from "../constants/products";
import { categories } from "../constants/products";

const Products = () => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(new Set());
  const [menu, setMenu] = useState(false);

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
    const handleFilter = () => {
      filter.size === 0
        ? setSearchProducts(products)
        : setSearchProducts((prev) =>
            prev.filter((item) => filter.has(item.category.toLowerCase()))
          );
    };

    handleFilter();
  }, [filter]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCheck = (e) => {
    e.target.checked
      ? setFilter((prev) => new Set(prev).add(e.target.value.toLowerCase()))
      : setFilter((prev) => {
          const newSet = new Set(prev);
          newSet.delete(e.target.value.toLowerCase());
          return newSet;
        });
  };

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="min-h-screen py-10">
      <div className="flex gap-2">
        <div className="hidden md:block shadow-xl px-5 pb-10">
          <h2 className="text-2xl pb-2">Select Category</h2>
          <div>
            {categories.map((category) => (
              <p className="w-56">
                <input
                  type="checkbox"
                  name={category}
                  id={category}
                  value={category}
                  key={category}
                  onChange={handleCheck}
                />
                <label htmlFor={category} className="px-2">
                  {category}
                </label>
              </p>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center px-5 w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product by their name or category"
              className="shadow-xl rounded focus:outline-none w-full px-2 py-4"
              value={search}
              onChange={handleChange}
            />
          </div>
          <div className="block md:hidden p-5 w-full">
            <div className="shadow-xl rounded-xl px-5">
              <h2 className="text-xl pb-2" onClick={handleMenu}>
                Select Category
              </h2>
              <div className={!menu ? "hidden" : ""}>
                {categories.map((category) => (
                  <p className="md:w-56">
                    <input
                      type="checkbox"
                      name={category}
                      id={category}
                      value={category}
                      key={category}
                      onChange={handleCheck}
                    />
                    <label htmlFor={category} className="px-2">
                      {category}
                    </label>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly gap-10 py-10">
            {searchProducts.map((product) => (
              <div className="px-4 md:px-0 w-full md:w-64">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

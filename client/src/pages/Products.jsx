import { useState, useMemo } from "react";
import { FaSearch, FaStar, FaTimes } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { ProductCard } from "../components/products";
import { Section, Stack } from "../components/ui";
import { useProductFilter, useProducts, useCategories, useMetadata } from "../lib/hooks";

const PRICE_OPTIONS = [
  { id: "p1", label: "Under ₹10L", min: 0, max: 1_000_000 },
  { id: "p2", label: "₹10L - ₹25L", min: 1_000_000, max: 2_500_000 },
  { id: "p3", label: "₹25L - ₹50L", min: 2_500_000, max: 5_000_000 },
  { id: "p4", label: "₹50L+", min: 5_000_000, max: Infinity },
];

const RATING_OPTIONS = [4, 3];

const SORT_OPTIONS = [
  { value: "relevance", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Avg. Customer Review" },
];

const getPrice = (item) => {
  const min = Number(item?.minPrice ?? 0);
  const max = Number(item?.maxPrice ?? min ?? 0);
  if (Number.isFinite(min) && min > 0) return min;
  if (Number.isFinite(max) && max > 0) return max;
  return 0;
};

const applyPriceFilter = (list, priceFilter) => {
  if (!priceFilter) return list;
  const band = PRICE_OPTIONS.find((p) => p.id === priceFilter);
  if (!band) return list;

  return list.filter((item) => {
    const price = getPrice(item);
    if (!Number.isFinite(price) || price <= 0) return false;
    const withinMax = band.max === Infinity ? true : price <= band.max;
    return price >= band.min && withinMax;
  });
};

const applyRatingFilter = (list, ratingFilter) => {
  if (!ratingFilter) return list;
  const minRating = Number(ratingFilter);
  return list.filter((item) => Number(item.stars || 0) >= minRating);
};

const sortProducts = (list, sortBy) => {
  switch (sortBy) {
    case "price-asc":
      return list.sort((a, b) => (a.minPrice ?? 0) - (b.minPrice ?? 0));
    case "price-desc":
      return list.sort((a, b) => (b.minPrice ?? 0) - (a.minPrice ?? 0));
    case "rating":
      return list.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    default:
      return list;
  }
};

const Products = () => {
  const { products, loading, error } = useProducts();
  const { categories } = useCategories();
  const { filteredProducts, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
    useProductFilter(products);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useMetadata({
    title: "Products",
    description: "Browse our extensive range of quality industrial machinery and machine tools",
    url: "https://balijimachinetools.com/products",
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "" : category));
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setPriceFilter("");
    setRatingFilter("");
    setSearchQuery("");
  };

  const totalCount = products.length;
  const hasActiveFilters = searchQuery || selectedCategory || priceFilter || ratingFilter;

  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const displayedProducts = useMemo(() => {
    let list = [...filteredProducts];
    list = applyPriceFilter(list, priceFilter);
    list = applyRatingFilter(list, ratingFilter);
    list = sortProducts(list, sortBy);
    return list;
  }, [filteredProducts, priceFilter, ratingFilter, sortBy]);

  const skeletons = useMemo(() => Array.from({ length: 8 }), []);
  const resultCount = displayedProducts.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Error State */}
      {error && (
        <div className="mx-5 mt-5 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
          <p className="font-medium text-red-700">Error: {error}</p>
        </div>
      )}

      {/* Enhanced Search Section */}
      <Section
        padding="lg"
        className="u-bg-primary-gradient w-full text-white shadow-lg"
        maxWidth="max-w-7xl"
      >
        <Stack align="center" gap="4" className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Products</h1>
          <Stack as="div" gap="3" className="w-full max-w-3xl">
            <div
              className={`u-card-hover flex items-center gap-0 ${
                isSearchFocused ? "scale-105 shadow-2xl" : ""
              }`}
            >
              <div className="flex shrink-0 items-center justify-center px-4 py-3 text-blue-600 sm:px-5 sm:py-4">
                <FaSearch className="text-lg sm:text-xl" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                placeholder="Search products..."
                className="w-full bg-white py-3 pr-4 text-sm text-gray-900 placeholder-gray-500 outline-none sm:py-4 sm:pr-5 sm:text-base"
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="flex shrink-0 items-center justify-center px-4 py-3 text-gray-600 transition-colors hover:text-gray-900 sm:px-5 sm:py-4"
                  aria-label="Clear search"
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </button>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-white sm:flex-row sm:gap-3 sm:text-sm">
              <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 backdrop-blur">
                {resultCount} of {totalCount || "—"} {resultCount === 1 ? "product" : "products"}
              </span>
              {hasActiveFilters && (
                <span className="rounded-full border border-amber-200 bg-amber-100/90 px-3 py-1 text-amber-800">
                  Filters active
                </span>
              )}
            </div>
          </Stack>
        </Stack>
      </Section>

      {/* Enhanced Category Filters */}
      {/* Amazon-style filters + grid */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10 md:px-10">
        {/* Mobile Filter Toggle */}
        <div className="mb-6 flex gap-2 lg:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            <FaSliders className="text-sm" />
            <span>Filters</span>
          </button>
          {hasActiveFilters && (
            <span className="flex items-center rounded-lg bg-amber-100 px-3 py-2 text-sm font-medium text-amber-800">
              Active
            </span>
          )}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar - Hidden on mobile unless toggled */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } h-fit space-y-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:block lg:w-72`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800 sm:text-lg">Filters</h3>
              <div className="flex gap-2">
                {hasActiveFilters && (
                  <button onClick={resetFilters} className="text-xs text-blue-600 hover:underline">
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-gray-700 lg:hidden"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Categories</p>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="accent-blue-600"
                    />
                    <span>
                      {category}
                      <span className="text-gray-400"> ({categoryCounts[category] || 0})</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPriceFilter(priceFilter === opt.id ? "" : opt.id)}
                    className={`rounded-lg border px-3 py-2 text-left transition ${
                      priceFilter === opt.id
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Customer Rating</p>
              <div className="flex flex-col gap-2">
                {RATING_OPTIONS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRatingFilter(ratingFilter === String(r) ? "" : String(r))}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left transition ${
                      ratingFilter === String(r)
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <span className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${i < r ? "fill-amber-500" : "fill-gray-300"}`}
                        />
                      ))}
                    </span>
                    <span className="text-sm text-gray-700">{r}+ stars</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-800">{displayedProducts.length}</span> of{" "}
                {totalCount || "—"} items
                {priceFilter && <span className="u-badge-blue ml-2">Price</span>}
                {ratingFilter && <span className="u-badge-blue ml-2">{ratingFilter}★ & up</span>}
                {selectedCategory && <span className="u-badge-blue ml-2">{selectedCategory}</span>}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skeletons.map((_, idx) => (
                  <div
                    key={idx}
                    className="animate-pulse rounded-2xl border border-gray-100 bg-white shadow"
                  >
                    <div className="h-44 rounded-t-2xl bg-gray-200" />
                    <div className="space-y-3 p-4">
                      <div className="h-4 rounded bg-gray-200" />
                      <div className="h-4 w-2/3 rounded bg-gray-200" />
                      <div className="flex items-center justify-between pt-2">
                        <div className="h-4 w-1/3 rounded bg-gray-200" />
                        <div className="h-8 w-16 rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="mb-6 text-gray-300">
                  <FaSearch className="text-6xl" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-700">No products found</h3>
                <p className="mb-6 text-center text-gray-500">
                  Try adjusting your search or filters
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import { useState, useMemo } from "react";

/**
 * Custom hook for filtering products by search query and category
 * @param {Array} products - Array of all products
 * @returns {Object} - { filteredProducts, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }
 */
export const useProductFilter = (products) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Use useMemo for better performance instead of useEffect
  const filteredProducts = useMemo(() => {
    if (!searchQuery && !selectedCategory) return products;

    const searchTerm = searchQuery.toLowerCase().trim();
    const categoryMatch = selectedCategory.toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm);

      const matchesCategory = !categoryMatch || product.category.toLowerCase() === categoryMatch;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, products]);

  return {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  };
};

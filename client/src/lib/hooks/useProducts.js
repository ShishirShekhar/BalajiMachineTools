/**
 * Custom hook for fetching all products
 * Handles loading, error, and data states
 *
 * Usage:
 * const { products, loading, error } = useProducts();
 */

import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to load products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;

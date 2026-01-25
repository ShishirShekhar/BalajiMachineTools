/**
 * Custom hook for fetching a single product by ID
 * Handles loading, error, and data states
 *
 * Usage:
 * const { product, loading, error } = useProductById(id);
 */

import { useState, useEffect } from "react";
import { fetchProductById } from "../services/productService";

export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      return;
    }

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || "Failed to load product");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProductById;

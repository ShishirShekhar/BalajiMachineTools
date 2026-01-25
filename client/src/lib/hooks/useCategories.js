/**
 * Custom hook for fetching product categories
 * Handles loading, error, and data states
 *
 * Usage:
 * const { categories, loading, error } = useCategories();
 */

import { useState, useEffect } from "react";
import { fetchCategories } from "../services/productService";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message || "Failed to load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;

import { products as localProducts } from "../data/products";

const USE_API = false;
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const SIMULATION_DELAY = 200;

const handleApiResponse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API request failed: ${url}`);
  return response.json();
};

const simulateAsyncDelay = (data, delay = SIMULATION_DELAY) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export const fetchProducts = async () => {
  try {
    return USE_API
      ? handleApiResponse(`${API_BASE_URL}/products`)
      : simulateAsyncDelay(localProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    if (USE_API) {
      return handleApiResponse(`${API_BASE_URL}/products/${id}`);
    }
    const product = localProducts.find((p) => p.id === id);
    if (!product) throw new Error(`Product ${id} not found`);
    return simulateAsyncDelay(product);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    if (USE_API) {
      return handleApiResponse(`${API_BASE_URL}/products?category=${encodeURIComponent(category)}`);
    }
    const filtered = localProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return simulateAsyncDelay(filtered);
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    if (USE_API) {
      return handleApiResponse(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    }
    const searchTerm = query.toLowerCase();
    const results = localProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.description?.toLowerCase().includes(searchTerm)
    );
    return simulateAsyncDelay(results);
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    if (USE_API) {
      return handleApiResponse(`${API_BASE_URL}/categories`);
    }
    const uniqueCategories = [...new Set(localProducts.map((p) => p.category))];
    return simulateAsyncDelay(uniqueCategories, 100);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default {
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
  searchProducts,
  fetchCategories,
};

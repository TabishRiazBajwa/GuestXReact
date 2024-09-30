import axios from "axios";

// Base URL from environment variables
const baseURL = process.env.REACT_APP_API_BASE_URL || "https://localhost:7045";

// Create an Axios instance with common settings
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0",
    // Uncomment below if token-based authentication is needed
    // Authorization: `Bearer ${token}`
  }
});

// GET method
export const get = async (endpoint, config = {}) => {
  try {
    const response = await apiClient.get(endpoint, config);
    return response.data;
  } catch (error) {
    console.error(`GET request to ${endpoint} failed:`, error);
    throw error;
  }
};

// POST method
export const post = async (endpoint, data, config = {}) => {
  try {
    const response = await apiClient.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(`POST request to ${endpoint} failed:`, error);
    throw error;
  }
};
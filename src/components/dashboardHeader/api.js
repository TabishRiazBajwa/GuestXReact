import { get } from "../../api/apiV2"; // Import the get method from apiV2

// Function to fetch the total calls count (specific to this component)
export const fetchTotalCalls = async () => {
  const endpoint = '/api/dashboard/getcallcount';
  try {
    const data = await get(endpoint); // Use the 'get' method from apiV2
    return data;
  } catch (error) {
    console.error('Error fetching total calls count:', error);
    throw error;
  }
};

export const fetchDashboardHeaders = async () => {
  const endpoint = '/api/dashboard/GetDashboardHeaders';
  try {
    const data = await get(endpoint); // Use the 'get' method from apiV2
    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};

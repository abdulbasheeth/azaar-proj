// src/api/api.js
const BASE_URL = "https://backend-makaniq.onrender.com/api"; // Live backend URL

// Fetch Home data from live backend
export const getHomeData = async () => {
  const res = await fetch(`${BASE_URL}/home`);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/users", // adjust if different
  withCredentials: true, // ✅ important for cookies
});

export default api;

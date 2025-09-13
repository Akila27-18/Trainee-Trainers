// src/axios.js
import axios from "axios";

const BASE_URL = "https://trainee-trainers.onrender.com/api/";

const instance = axios.create({git add backend frontend
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;

import axios from "axios";

export const api = axios.create({
  // baseURL: "https://fullstack-challenge-back-t4hh.onrender.com/",
  baseURL: "https://localhost:3000/",
  timeout: 5000,
});

import axios from "axios";

export const api = axios.create({
  baseURL: "https://fullstack-challenge-back-t4hh.onrender.com",
  // baseURL: "http://localhost:3000",
  timeout: 15000,
});

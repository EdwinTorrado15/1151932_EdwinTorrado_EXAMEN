import axios from "axios";

export const apiWeb = axios.create({
  baseURL: "http://localhost:3000/api",
});

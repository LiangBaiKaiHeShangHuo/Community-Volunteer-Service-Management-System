import axios from "axios";

const api = axios.create({
  baseURL: "http://8.148.70.85:3030/login", // 你的API基础URL
  // method: "POST",
  timeout: 10000, // 请求超时时间
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default api;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kay-solu-api.onrender.com/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});

export default axiosInstance;
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:  'https://airbnb-backend-m52m.onrender.com',
  withCredentials: true,
});

export default axiosInstance;

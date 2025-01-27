// import { B_Url } from '../../config';
import { B_Url } from '../../config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://compass-6k5c.onrender.com',   
  // baseURL: B_Url,   
  withCredentials: true,
  timeout: 50000,
  secure: true,   
  sameSite: 'none',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
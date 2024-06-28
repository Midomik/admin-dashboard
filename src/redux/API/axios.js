import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://admin-dashboard-api-ipk5.onrender.com/api',
});

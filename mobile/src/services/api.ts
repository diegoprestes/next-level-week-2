import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.68.100:3333'
});

export default api;
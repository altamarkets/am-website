import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.headers['Content-Type'] = "application/json";
let baseURL: string | undefined = '';

if (!!window) {
  const config = useRuntimeConfig();
  console.log('CLIENT/api/index/config', config); //DELETE
  baseURL = config.public.API_URL;
} else {
  console.log('SERVER/api/index/API_URL', process.env.API_URL); //DELETE
  baseURL = process.env.API_URL;
}

const _api = axios.create({ baseURL, });

_api.interceptors.request.use(
  (config) => {
    console.log('api/index/interceptors/config', config); //DELETE

    const token = Cookies.get('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.maxContentLength = 500000000;
    config.maxBodyLength = 5000000000;
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const api = _api;

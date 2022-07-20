import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getEnvValue } from '@/utils/env';

const axiosInstance = axios.create({
  baseURL: getEnvValue('VITE_BASE_URL'),
  timeout: 10042,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {};
    return config;
  },
  (error: AxiosRequestConfig) => {
    console.error('*this is request error:', error);
    Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data);
  },
  (err: AxiosResponse) => {
    Promise.reject(err);
  }
);

export default axiosInstance;

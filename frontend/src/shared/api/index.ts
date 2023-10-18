import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosConfig = (config?: AxiosRequestConfig): AxiosRequestConfig => ({
  ...(config || {}),
  headers: {
    'Content-Type': 'application/json',
    ...(config?.headers || {}),
  },
});

const baseUlr = "http://localhost:8080/";

const instance = axios.create({
  baseURL: baseUlr,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');

  // eslint-disable-next-line no-param-reassign
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

async function post<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  const [responseWithDelay] = await Promise.all([
    instance.post(url, body, axiosConfig(config)),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return responseWithDelay;
}

async function put<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  const [responseWithDelay] = await Promise.all([
    instance.put(url, body, axiosConfig(config)),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return responseWithDelay;
}

async function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  const [responseWithDelay] = await Promise.all([
    instance.get(url, axiosConfig(config)),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return responseWithDelay;
}

const api = { post, get, put };

export default api;

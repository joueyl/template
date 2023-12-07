import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
const { VITE_BASE_API, VITE_BASE_URL } = import.meta.env;
export const http = axios.create({
  baseURL: VITE_BASE_URL + VITE_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
});
//请求拦截
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});
//响应拦截
http.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
export const requst = async <T = any>(config: AxiosRequestConfig<T>) => {
  return new Promise<T>(async (resolve, reject) => {
    http<T>({
      method: "post",
      ...config,
    })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

function createHttpClient(endPoint = ''): AxiosInstance {
  const instance = axios.create({
    baseURL: `http://37.27.182.139:4000${endPoint}`,
    timeout: 0
  } as CreateAxiosDefaults);

  instance.interceptors.request.use((config) => {
    return config;
  });

  instance.interceptors.response.use(null, function axiosRetryInterceptor(err) {
    return Promise.reject(err);
  });

  return instance;
}

export const httpApiClient = createHttpClient('/api');

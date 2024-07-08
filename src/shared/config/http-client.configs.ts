import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

function createHttpClient(endPoint = ''): AxiosInstance {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_APP_URL}${endPoint}`,
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

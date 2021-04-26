import axios from 'axios';
import { serviceOptions } from './api';
const instance = axios.create({
  // baseURL: 'api',
  timeout: 3000,
  headers: {
    'X-Custom-Header': 'foobar',
    post: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  },
});

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    const { status } = error?.response;
    if (status) {
      switch (status) {
        // unauthorized
        case 401:
          localStorage.clear();
          window.location.href = `/login`;
          break;
      }
      return Promise.reject(error.response);
    }
  },
);

// NOTE not necessary at the moment
// instance.interceptors.request.use((config) => {
//   config.paramsSerializer = (params) => qs.stringify(params);
//   return config;
// });

serviceOptions.axios = instance;

import axios from 'axios';
import { serviceOptions } from './api';
const instance = axios.create({
  // baseURL: 'api',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' },
});
serviceOptions.axios = instance;

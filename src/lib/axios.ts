import axios from 'axios';
import { localStorageUtils } from '../utils/helpers';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async function (config) {
    const token = await localStorageUtils.getData('token');
    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
    }
    console.warn(config.auth);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axios;

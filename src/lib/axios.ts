import Axios from 'axios';

import { OUC_FUNCTIONS_URL } from '@/config';

export const axios = Axios.create({
  baseURL: OUC_FUNCTIONS_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);
    return Promise.reject(error);
  }
);

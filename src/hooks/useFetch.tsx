import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { localStorageUtils } from '../utils/helpers';

axios.interceptors.request.use(
  async function (config) {
    const token = await localStorageUtils.getData('token');
    config.headers!.authorization = `Bearer ${token}`;
    if (token) {
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

interface FetchDataType {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  data: any;
  isLoading: boolean;
  isError: boolean;
}

export const useFetch = (url: string): FetchDataType => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);

  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState<any>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

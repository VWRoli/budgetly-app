import { useState, useEffect, useCallback } from 'react';
import { localStorageUtils } from '../utils/helpers';

interface FetchDataType {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  data: any;
  isLoading: boolean;
  isError: boolean;
}

export const useFetch = (url: string): FetchDataType => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);

  const [userToken, setUserToken] = useState<string | null>(null);

  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const localData = await localStorageUtils.getData('token');
      if (localData) setUserToken(localData);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
          Authorization: `Bearer ${userToken}`,
        },
      });
      const resData = await response.json();

      setData(resData);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url, userToken]);

  useEffect(() => {
    fetchData();
  }, [url, userToken]);

  return { data, isLoading, isError };
};

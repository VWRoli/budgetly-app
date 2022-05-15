import { useState, useEffect, useCallback } from 'react';

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

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const resData = await response.json();

      setData(resData);

      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isLoading, isError };
};

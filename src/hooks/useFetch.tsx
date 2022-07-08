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
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF3ZXJ0eSIsImlkIjoiNjJjNWMzOWNkMThlZmFkNjgxNWQyNzNhIiwiaWF0IjoxNjU3MTI3ODM2LCJleHAiOjE2NTk3MTk4MzZ9.pLdgVzHChq4VMfhmaOXkcnb5Jxl2dIXh36R2hlu8L34',
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
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isLoading, isError };
};

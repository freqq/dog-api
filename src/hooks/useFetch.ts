import { useState, useEffect } from 'react';

const useFetch = <T>(url: string, options?: object) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  const reFetch = () => setRefetch(!refetch);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const responseJSON = await response.json();
        setData(responseJSON);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, options, refetch]);

  return { data, isLoading, isError, reFetch };
};

export default useFetch;

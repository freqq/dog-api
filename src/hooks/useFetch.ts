import { useState, useEffect } from 'react';

const useFetch = <T>(url: string, options?: object) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url as string, options);
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

  const reFetch = () => setRefetch(!refetch);

  return { data, isLoading, isError, reFetch };
};

export default useFetch;

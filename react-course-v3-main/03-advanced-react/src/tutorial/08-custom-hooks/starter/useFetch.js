import { useEffect, useState } from "react";

/**
 * The useFetch function is a custom hook in JavaScript that fetches data from a specified URL and
 * returns the loading status, error status, and data.
 * @param url - The URL of the API endpoint that the useFetch hook will fetch data from.
 * @returns The `useFetch` function returns an object with three properties: `isLoading`, `isError`,
 * and `data`. These properties are used to track the status of the data fetching process. `isLoading`
 * is a boolean value that indicates whether the data is currently being fetched or not. `isError` is a
 * boolean value that indicates whether an error occurred during the data fetching process. `data`
 */
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetch;

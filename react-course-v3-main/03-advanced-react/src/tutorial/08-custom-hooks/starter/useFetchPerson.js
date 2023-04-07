import { useEffect, useState } from "react";

/**
 * The function uses React hooks to fetch a user from a given URL and returns the loading status, error
 * status, and user data.
 * @param url - The URL of the API endpoint from which to fetch the user data.
 * @returns The `useFetchPerson` custom hook is returning an object with three properties: `isLoading`,
 * `isError`, and `user`. These properties are being set and updated using the `useState` hook and the
 * `useEffect` hook is being used to fetch data from the provided URL. The `isLoading` property is a
 * boolean that indicates whether the data is currently being fetched or not. The `
 */
const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  return { isLoading, isError, user };
};

export default useFetchPerson;

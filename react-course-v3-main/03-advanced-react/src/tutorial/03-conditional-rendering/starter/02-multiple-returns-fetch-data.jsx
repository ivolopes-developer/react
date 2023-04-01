import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  /* A hook that is called when the component mounts. */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resultLog = await fetch(url);

        if (!resultLog.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resultLog.json();

        console.log(resultLog);
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else if (isError) {
    return (
      <div>
        <h2>Error happened</h2>
      </div>
    );
  } else {
    const { avatar_url, name, company, bio } = user;
    return (
      <div>
        <img
          src={avatar_url}
          alt={name}
          style={{ width: "150px", borderRadius: "25px" }}
        />
        <h2>{name}</h2>
        <h4>works at: {company}</h4>
        <p>{bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;

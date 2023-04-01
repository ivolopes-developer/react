import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resultLog = await fetch(url);
        const user = await resultLog.json();

        console.log(user);
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
    return (
      <div>
        <img
          src={user.avatar_url}
          alt={user.name}
          style={{ width: "150px", borderRadius: "25px" }}
        />
        <h2>{user.name}</h2>
        <h4>works at: {user.company}</h4>
        <p>{user.bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;

import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userObject = {
    name: "John Doe",
    age: 30,
    job: "CopyWriter",
  };

  const logIn = () => {
    setUser(userObject);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <div>
      <h4>{user ? `Hey There, ${user.name}` : "Please LogIn"}</h4>
      <button className='btn' onClick={() => (user ? logOut() : logIn())}>
        {user ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};

export default UserChallenge;

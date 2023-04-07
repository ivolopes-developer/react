import { React, useContext, useState } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout, login } = useContext(NavbarContext);

  return (
    <div className='user-container'>
      {user ? (
        <>
          <div className='user-name'>
            Hello there, {user?.name?.toUpperCase()}
          </div>

          <button className='btn' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button className='btn' onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;

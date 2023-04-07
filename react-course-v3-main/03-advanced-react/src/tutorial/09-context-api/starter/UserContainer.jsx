import { React, useState } from "react";

const UserContainer = ({ user, logout, login }) => {
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

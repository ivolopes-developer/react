import React from "react";
import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout, login }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} login={login}></UserContainer>
    </div>
  );
};

export default NavLinks;

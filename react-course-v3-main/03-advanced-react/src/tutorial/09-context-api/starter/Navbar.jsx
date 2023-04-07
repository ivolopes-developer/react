import React from "react";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "bob" });
  };

  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} login={login}></NavLinks>
    </nav>
  );
};

export default Navbar;

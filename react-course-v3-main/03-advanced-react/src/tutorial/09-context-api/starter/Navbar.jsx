import React, { createContext, useState, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "bob" });
  };

  return (
    <NavbarContext.Provider
      value={{
        user,
        logout,
        login,
      }}
    >
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;

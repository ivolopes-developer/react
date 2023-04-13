import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<NavLink
				to='/'
				style={({ isActive }) => {
					return {
						color: isActive ? "red" : "gray",
					};
				}}
			>
				Home
			</NavLink>
			<NavLink
				to='/about'
				className={({ isActive }) => (isActive ? "link active" : "link")}
			>
				About
			</NavLink>
			<NavLink to='/products'>Products</NavLink>
		</nav>
	);
};

export default Navbar;

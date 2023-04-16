import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import React from "react";

const Navbar = () => {
	/* `const { amount } = useSelector((store) => store.cart);` is using the `useSelector` hook from the
  `react-redux` library to select the `amount` property from the `cart` slice of the Redux store. It
  is then using destructuring assignment to assign the value of `amount` to a constant variable named
  `amount`. This allows the `amount` value to be used in the component's JSX code. */
	const { amount } = useSelector((store) => store.cart);

	return (
		<nav>
			<div className='nav-center'>
				<h3>Redux Toolkit</h3>
				<div className='nav-container'>
					<CartIcon></CartIcon>
					<div className='amount-container'>
						<p className='total-amount'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

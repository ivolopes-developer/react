import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
	const dispatch = useDispatch();
	const { cartItems, total, amount } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'>your bag is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className='cart'>
			<header>
				<h2>Your Bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item}></CartItem>;
				})}
			</div>
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total: <span>${total}</span>
					</h4>
				</div>
				{cartItems.length > 0 ? (
					<button
						className='btn clear-btn'
						onClick={() => {
							dispatch(clearCart());
						}}
					>
						Clear Cart
					</button>
				) : null}
			</footer>
		</section>
	);
};

export default CartContainer;

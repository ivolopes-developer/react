import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
	isLoading: true,
};

/* This code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. The `createSlice` function takes an object with several properties, including `name` and
`initialState`. */
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			console.log(action);
			/* This code is removing an item from the cart by filtering out the item with the matching `id` from
			the `cartItems` array in the Redux state. */
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		increase: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount + 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount - 1;
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;

			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.amount = amount;
			state.total = total.toFixed(2);
		},
	},
});

console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions;

export default cartSlice.reducer;

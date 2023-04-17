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
	},
});

export default cartSlice.reducer;

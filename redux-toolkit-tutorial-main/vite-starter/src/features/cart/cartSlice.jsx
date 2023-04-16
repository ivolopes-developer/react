import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	amount: 0,
	total: 0,
	isLoading: true,
};

/* This code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. The `createSlice` function takes an object with several properties, including `name` and
`initialState`. */
const cartSlice = createSlice({
	name: "carl",
	initialState,
});

export default cartSlice.reducer;

/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: null,
};

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		setAccount: (state, action) => {
			state.userInfo = action.payload;
		},
		logout: (state) => {
			state.userInfo = null;
		},
	},
});

export const { setAccount, logout } = accountSlice.actions;

export default accountSlice.reducer;

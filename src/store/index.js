/** @format */

import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account/accountSlice';

export const store = configureStore({
	reducer: {
		account: accountSlice,
	},
});

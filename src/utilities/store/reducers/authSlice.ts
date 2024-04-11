import type { PayloadAction } from '@reduxjs/toolkit';

// types
import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, cleanTokenEtag } from '../../account';

export interface Account {
	avatar: string
}

export interface IState {
	hasBeenLogin: boolean
	account: Account | null
}

// initial state
const initialState: IState = {
	hasBeenLogin: false,
	account: null,
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		/* eslint-disable no-param-reassign */
		login(state, action) {
			// should validate the token
			saveToLocalStorage(action.payload);
			state.hasBeenLogin = true;
			state.account = action.payload;
		},
		logout(state /* action */) {
			cleanTokenEtag();
			state.hasBeenLogin = false;
			state.account = null;
		},
		getAvatar(state: Readonly<any>) {
			return state.account.avatar;
		},
		updateAvatar(state, action: PayloadAction<string>) {
			state.account.avatar = action.payload;
		},
		/* eslint-enable no-param-reassign */
	},
});

export default auth.reducer;

export const {
	login, logout, getAvatar, updateAvatar,
} = auth.actions;

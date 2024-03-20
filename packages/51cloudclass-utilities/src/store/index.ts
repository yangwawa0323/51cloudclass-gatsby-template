/** @format */

// third-party
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({
	reducer: reducers,
});

const { dispatch } = store;

export default { dispatch, store };

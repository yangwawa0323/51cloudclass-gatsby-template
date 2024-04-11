import type { AxiosInstance } from 'axios';
/** @format */

export const isBrowser = typeof window !== 'undefined';

/* eslint-disable no-param-reassign */
export const withTokenHeader = (axiosInstance: AxiosInstance) => {
	let token = null;
	if (isBrowser) {
		token = window.localStorage.getItem('token');
		if (token) {
			axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
			axiosInstance.defaults.headers.common.Etag = window.localStorage.getItem('etag');
		}
	}
};

export const cors = (axiosInstance: AxiosInstance) => {
	axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
};
/* eslint-enable no-param-reassign */

export const corsConfig = (method: string | null) => ({
	method: method || 'GET',
	mode: 'no-cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	credentials: 'same-origin',
});

const defaults = {
	withTokenHeader,
	cors,
	corsConfig,
	isBrowser,
};

export default defaults;

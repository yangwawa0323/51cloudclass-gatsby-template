// eslint-disable no-tabs

import axios, { AxiosInstance } from 'axios';
import { cors, withTokenHeader } from '../net';

let axiosInstance: AxiosInstance;

const styles = [
	'background : rebeccapurple',
	'border-radius: 0.5em',
	'color : white',
	'font-weight : bold',
	'padding: 2px 0.5em',
].join(';');

export const debugLog = (...args: Array<unknown>) => {
	console.debug('%c51cloudclass', styles, ...args);
};

export const getAxios: () => AxiosInstance = () => {
	if (axiosInstance === undefined) {
		axiosInstance = axios.create();
	}
	withTokenHeader(axiosInstance);
	cors(axiosInstance);
	return axiosInstance;
};

/* eslint-disable no-param-reassign */
export const debounce = (fn: Function, threshold: number) => {
	let timeout: number;
	threshold = threshold || 100;
	return function debounced() {
		clearTimeout(timeout);
		// eslint-disable-next-line prefer-rest-params
		const args = arguments;
		const thisInstance = this;
		function delayed() {
			fn.apply(thisInstance, args);
		}
		timeout = setTimeout(delayed, threshold);
	};
};
/* eslint-enable no-param-reassign */

export const random = (max: number) => Math.floor((Math.random() * max) % max);

export const formatDate = (date: Date, format = 'yyyy-mm-dd') => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDay();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	if (format === 'yyyy-mm-dd') {
		return [year, month, day].join('-');
	}

	if (format === 'yyyy-mm-dd HH:MM') {
		return `${[year, month, day].join('-')} ${[hour, minute].join(':')}`;
	}

	return `${[year, month, hour].join('-')} ${[hour, minute, second].join(':')}`;
};

export const gradientColor = {
	backgroundImage:
		'linear-gradient(15deg, rgb(102, 0, 255) 0%, rgb(255, 0, 102) 100%)',
	display: 'inline-block',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent', // capitalized the 1st char
};

export const getRidOfDomain = (url: string) => url?.replace(/[^:]+:\/\/[^/]+\//, '');

export const getUrlParameter = (search: string) => search?.replace(/[^?]+\?/, '?');

const defaults = {
	getAxios,
	debugLog,
	debounce,
	random,
	formatDate,
	getRidOfDomain,
	getUrlParameter,
};

export default defaults;

/** @format */

import React from 'react';
import traverse from 'traverse';
import axios from 'axios';
import Moment from 'react-moment';
// eslint-disable-next-line
import moment from 'moment/min/moment-with-locales';

Moment.globalMoment = moment;
Moment.globalLocale = 'zh-cn';

export const MomentUtil = (props) => {
	const { value } = props;

	return <Moment date={new Date(value)} fromNow />;
};

var axiosInstance;

export const debug = (message) => {
	console.log(
		`%c[51cloudclass]:`,
		'color: green; background: yellow; font-size: 14px'
	);
	console.log(message);
};

export const removeAllChildNodes = (parent) => {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
};

export const isLogin = () => {
	// TODO: get token string from local storage and verified. return true/false
};

export const redirect = (url) => {
	// TODO: redirect to new url
};

export const getTitle = (nodeContent) => {
	let title = '',
		found = false;
	traverse(nodeContent).forEach(function (obj) {
		let walkObj = obj;
		if (found) return;
		if (obj instanceof Object && obj.hasOwnProperty('dataI18n')) {
			walkObj = walkObj.dataI18n;
			if (walkObj.hasOwnProperty('default')) {
				walkObj = walkObj.default;
				if (walkObj.hasOwnProperty('slate')) {
					walkObj = walkObj.slate;
					if (walkObj instanceof Array) {
						// use every to replace the forEach, every will break immidately the code block returns
						// eslint-disable-next-line array-callback-return
						walkObj.every((wlk, idx) => {
							if (wlk.type.startsWith('HEADINGS')) {
								found = true;
								title = wlk.children[0].text;
								return; // eslint-disable-line  array-callback-return
							}
						});
					}
				}
			}
		}
	});
	return title;
};

export const formatDate = (date, format = 'yyyy-mm-dd') => {
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
		return [year, month, day].join('-') + ' ' + [hour, minute].join(':');
	}

	return [year, month, hour].join('-') + ' ' + [hour, minute, second].join(':');
};

export const randomColor = () => {
	const colors = ['#7421fc', 'black'];
	return colors[Math.floor(Math.random() * colors.length)];
};

export const gradientColor = {
	backgroundImage:
		'linear-gradient(15deg, rgb(102, 0, 255) 0%, rgb(255, 0, 102) 100%)',
	display: 'inline-block',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent', // capitalized the 1st char
};

export const keepUserInfo = (user) => {
	localStorage.setItem('account', JSON.stringify(user, null, 2));
};

export const getUserInfo = () => localStorage.getItem('account');

export function debounce(fn, threshold) {
	var timeout;
	threshold = threshold || 100;
	return function debounced() {
		clearTimeout(timeout);
		var args = arguments;
		var _this = this;
		function delayed() {
			fn.apply(_this, args);
		}
		timeout = setTimeout(delayed, threshold);
	};
}

const styles = [
	`background : rebeccapurple`,
	`border-radius: 0.5em`,
	`color : white`,
	`font-weight : bold`,
	`padding: 2px 0.5em`,
].join(';');

export function debugLog(...args) {
	console.debug(`%c51cloudclass`, styles, ...args);
}

// Axios instance singleton.
export const getAxios = () => {
	if (axiosInstance === undefined) {
		axiosInstance = axios.create();
	}
	return axiosInstance;
};

export const cors = () => {
	axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
};

export const corsConfig = (method) => ({
	method: method || 'GET',
	mode: 'no-cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	credentials: 'same-origin',
});

export const getTokenEtag = () => {
	return [localStorage.getItem('token'), localStorage.getItem('etag')];
};

export const cleanTokenEtag = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('etag');
};

import React, { lazy } from 'react';
// debounce so filtering doesn't happen every millisecond
// eslint-disable-next-line
import PropTypes from 'prop-types';
// The only place to use axios create the instance.
import axios from 'axios';
import momentAgo from 'moment-ago';

var axiosInstance;

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

export const MomentUtil = (props) => {
	const { value } = props;

	return <span>{momentAgo(new Date(value)).ago()}</span>;
};

MomentUtil.propTypes = {
	value: PropTypes.any,
};

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
	withTokenHeader();
	return axiosInstance;
};

export const withTokenHeader = () => {
	axiosInstance.defaults.headers.common[
		'Authorization'
	] = `Bearer ${localStorage.getItem('token')}`;
	axiosInstance.defaults.headers.common['Etag'] = localStorage.getItem('etag');
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

/** @format */

import React from 'react';
import traverse from 'traverse';
import Moment from 'react-moment';
// eslint-disable-next-line
import moment from 'moment/min/moment-with-locales';
import { isBrowser } from 'react-device-detect';

Moment.globalMoment = moment;
Moment.globalLocale = 'zh-cn';

export const MomentUtil = (props) => {
	const { value } = props;

	return (
		<Moment
			date={new Date(value)}
			fromNow
		/>
	);
};

export const removeAllChildNodes = (parent) => {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
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
	if (isBrowser) {
		window.localStorage.setItem('account', JSON.stringify(user, null, 2));
	}
};

export const getUserInfo = () => {
	if (isBrowser) {
		return window.localStorage.getItem('account');
	}
};

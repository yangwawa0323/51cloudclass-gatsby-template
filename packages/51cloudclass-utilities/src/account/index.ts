
import { isBrowser } from '../net';

interface TokenEtagAccount {
	token: string;
	etag: string;
	account: string;
}

// TODO: change all the getTokenEtagAccount spread from object.
export const getTokenEtagAccount = (): TokenEtagAccount => {
	if (typeof window !== 'undefined') {
		return {
			token: window.localStorage.getItem('token'),
			etag: window.localStorage.getItem('etag'),
			account: window.localStorage.getItem('account'),
		};
	}
	return {
		token: null,
		etag: null,
		account: null,
	};
};

export interface Storage {
	token: string
	etag: string
	account: string
}


export const saveToLocalStorage = (data: Storage) => {
	if (isBrowser) {
		window.localStorage.setItem('token', data.token);
		window.localStorage.setItem('etag', data.etag);
		window.localStorage.setItem('account', JSON.stringify(data, null, 2));
	}
};

export const cleanTokenEtag = () => {
	if (isBrowser) {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('etag');
		window.localStorage.removeItem('account');
	}
};

export const getAccount = () => {
	const account = isBrowser ? window.localStorage.getItem('account') : '{}';
	return JSON.parse(account);
};

const defaults = {
	getTokenEtagAccount,
	saveToLocalStorage,
	cleanTokenEtag,
};

export default defaults;

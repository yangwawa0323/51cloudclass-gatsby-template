/** @format */

import React from 'react';
import Frame from '../components/frame';
import App from '../components/profile/Avataaar/components/App';

import { configureUrlQuery } from 'react-url-query';
import { needLoginWrapper } from '../hooks';
import type { BrowserHistory } from 'history';

var history: BrowserHistory;

if (typeof window !== `undefined`) {
	// or typeof document !== 'undefined'
	const createHistory = require('history').createBrowserHistory;
	history = createHistory();
	configureUrlQuery({ history });
}

class Avatar extends React.Component<any, any> {
	componentDidMount() {
		// force an update if the URL changes

		history.listen(() => this.forceUpdate());
	}

	getChildContext() {
		if (typeof window !== 'undefined') {
			return { searchParamString: window?.location.search };
		} else {
			return {};
		}
	}

	render() {
		return (
			<Frame>
				<App />
			</Frame>
		);
	}
}

export default needLoginWrapper(Avatar);

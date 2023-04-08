/** @format */

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store';
import RootElement from './src/components/root-element';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// eslint-disable-next-line react/display-name,react/prop-types,import/no-anonymous-default-export
export default ({ element }) => {
	// Instantiating store in `wrapRootElement` handler ensures:
	//  - there is fresh store for each SSR page
	//  - it will be called only once in browser, when React mounts
	return (
		<Provider store={store}>
			<RootElement>
				{element}
				<ReactQueryDevtools initialIsOpen={false} />
			</RootElement>
		</Provider>
	);
};

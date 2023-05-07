/** @format */

import React, { useState } from 'react';

import { store } from '51cloudclass-utilities/src/store';

import RootElement from './src/components/root-element';
import { createContext } from 'react';
import { getTokenEtagAccount } from '51cloudclass-utilities/src/account';
import { useJwt } from 'react-jwt';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useTour } from '@reactour/tour';
import { Provider } from 'react-redux';

export const globalContext = createContext<any>(null);

type GlobalContextProps = {
	children: React.ReactNode;
};

const GlobalContextProvider = ({ children }: GlobalContextProps) => {
	/* eslint-disable no-unused-vars */
	const { setIsOpen: setIsTourOpen, isOpen: isTourOpen } = useTour();

	let [storageToken, _U, storageAccountJSON] = getTokenEtagAccount();
	/* eslint-enable no-unused-vars */

	// TODO: need verify the token from the server.
	const { decodedToken, isExpired } = useJwt(storageToken);

	const [isLogin, setIsLogin] = useState(false);

	const context = {
		isExpired,
		decodedToken,

		isLogin,
		setIsLogin,

		setIsTourOpen,
		isTourOpen,
	};

	return (
		<globalContext.Provider value={context}>{children} </globalContext.Provider>
	);
};

// eslint-disable-next-line react/display-name,react/prop-types,import/no-anonymous-default-export
export default ({ element }: { element: React.ReactNode }) => {
	// Instantiating store in `wrapRootElement` handler ensures:
	//  - there is fresh store for each SSR page
	//  - it will be called only once in browser, when React mounts
	return (
		<Provider store={store}>
			<GlobalContextProvider>
				<RootElement>{element} </RootElement>
			</GlobalContextProvider>
		</Provider>
	);
};
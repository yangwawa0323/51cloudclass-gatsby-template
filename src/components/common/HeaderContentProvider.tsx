/** @format */

import React, { createContext } from 'react';

export const HeaderContext = createContext<any>(null);

interface HeaderContextProps {
	children: React.ReactNode;
	extraContext: object;
}

const HeaderContextProvider = ({
	children,
	extraContext,
}: HeaderContextProps) => {
	const context = {
		...extraContext,
	};

	return (
		<HeaderContext.Provider value={context}>{children}</HeaderContext.Provider>
	);
};

export default HeaderContextProvider;

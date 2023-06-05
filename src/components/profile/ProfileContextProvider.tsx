/** @format */

import React from 'react';
import { createContext } from 'react';

export const profileContext = createContext<any>(null);

type ProfileProps = {
	children: React.ReactNode;
	extraContext: Object;
};

const ProfileContextProvider = ({ children, extraContext }: ProfileProps) => {
	let context = {
		...extraContext,
	};
	return (
		<profileContext.Provider value={context}>
			{children}
		</profileContext.Provider>
	);
};

export default ProfileContextProvider;

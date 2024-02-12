import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialStates = {
	message: false,
	userProfile: false,
	notification: false,
};

const StateContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState();

	return (
		<StateContext.Provider
			value={{
				initialStates,
				screenSize,
				setScreenSize,
				activeMenu,
				setActiveMenu,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

const useStateContext = () => useContext(StateContext);

export { StateContext, StateContextProvider, useStateContext };

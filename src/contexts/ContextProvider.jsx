import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialStates = {
	message: false,
	userProfile: false,
	notification: false,
};

const StateContextProvider = ({ children, extraContext }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState();
	const [messageData, setMessageData] = useState();
	const [friendId, setFriendId] = useState(0);

	const debugSetFriendId = (fid) => {
		setFriendId(fid);
	};

	return (
		<StateContext.Provider
			value={{
				initialStates,
				screenSize,
				setScreenSize,
				activeMenu,
				setActiveMenu,
				...extraContext,
				messageData,
				setMessageData,
				friendId,
				setFriendId,
				debugSetFriendId,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

const useStateContext = () => useContext(StateContext);

export { StateContext, StateContextProvider, useStateContext };

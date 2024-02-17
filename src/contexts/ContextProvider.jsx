import { debugLog } from '51cloudclass-utilities/src/utils';
import React, { createContext, useContext, useEffect, useState } from 'react';

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
		debugLog('StateContextProvider Friend id :', fid);
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

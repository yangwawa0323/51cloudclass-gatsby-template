/** @format */

import React, { createContext, useState } from 'react';

export const ChapterContext = createContext(null);

const ChapterContextProvider = ({ extraContext, children }) => {
	const [chapters, setChapters] = useState([]);
	const context = {
		chapters,
		setChapters,
		...extraContext,
	};

	return (
		<ChapterContext.Provider value={context}>
			{children}
		</ChapterContext.Provider>
	);
};

export default ChapterContextProvider;

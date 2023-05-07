/** @format */

import React, { createContext, useState } from 'react';

export const ChapterContext = createContext<any>(null);

interface ChapterContextProps {
	extraContext: React.Context<any>;
	children: React.ReactNode;
}

export type Chapter = {
	ID: number;
};

const ChapterContextProvider = ({
	extraContext,
	children,
}: ChapterContextProps) => {
	const [chapters, setChapters] = useState<Array<Chapter>>([]);
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

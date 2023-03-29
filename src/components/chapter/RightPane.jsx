/** @format */

import React from 'react';
import ChapterList from './ChapterList';
import More from './More';
import Resource from './Resource';

const RightPane = () => {
	return (
		<div className='w-full'>
			<ChapterList />
			<More />
			<Resource />
		</div>
	);
};

export default RightPane;

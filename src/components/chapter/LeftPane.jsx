/** @format */

import React from 'react';
import Video from './Video';
import Detail from './Detail';

const LeftPane = () => {
	return (
		<div className='w-full flex flex-col'>
			<Detail />
			<Video />
			<Detail />
		</div>
	);
};

export default LeftPane;

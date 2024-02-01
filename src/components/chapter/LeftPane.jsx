/** @format */

import React from 'react';
import Video from './Video';
import Detail from './Detail';

const LeftPane = () => {
	return (
		<div className='flex flex-col gap-4'>
			<Detail />
			<Video />
		</div>
	);
};

export default LeftPane;

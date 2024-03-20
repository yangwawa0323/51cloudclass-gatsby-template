/** @format */

import React from 'react';
import Video from './Video';
import Detail from './Detail';

const LeftPane = () => {
	return (
		<div className='w-11/12 flex flex-col justify-center'>
			<Detail />
			<Video />
			<Detail />
		</div>
	);
};

export default LeftPane;

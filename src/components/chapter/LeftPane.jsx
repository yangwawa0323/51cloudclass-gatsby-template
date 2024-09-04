/** @format */

import React from 'react';
import Video from './Video';
import Detail from './Detail';

const LeftPane = () => {
	return (
		<div className='w-11/12 flex flex-col justify-center'>
			<div>
				<Detail />
			</div>
			<div className='mb-10'>
				<Video />
			</div>
			<div>
				<Detail />
			</div>
		</div>
	);
};

export default LeftPane;

/** @format */

import React from 'react';
import Video from './Video';
import Detail from './Detail';

const LeftPane = () => {
	return (
		<div>
			<div>
				<Detail />
			</div>
			<div>
				<Video />
			</div>
		</div>
	);
};

export default LeftPane;

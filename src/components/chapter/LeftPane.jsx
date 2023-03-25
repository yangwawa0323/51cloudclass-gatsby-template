/** @format */

import React from 'react';
import { Grid } from '@mui/material';
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

import React from 'react';
import Frame from './frame';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
	return (
		<Frame>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='100vh'
				width='100%'
			>
				<CircularProgress size='80' />
			</Box>
		</Frame>
	);
};

export const NoFrameLoading = () => {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			height='80vh'
			width='100%'
		>
			<CircularProgress />
		</Box>
	);
};

export default Loading;

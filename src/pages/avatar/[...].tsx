/** @format */

import React, { useState } from 'react';
import Frame from '../../components/frame';

import { needLoginWrapper } from '../../hooks';
import { Box } from '@mui/material';
import AvatarStyleForm from '../../components/avataaars/form';

const AvatarStyle = () => {
	const [age, setAge] = useState<Number>(10);
	return (
		<Frame>
			<Box>
				<AvatarStyleForm />
			</Box>
		</Frame>
	);
};

// export default needLoginWrapper(AvatarStyle);
export default AvatarStyle;

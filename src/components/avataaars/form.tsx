import React from 'react';
import Avataaar from './avatar';
import { Box } from '@mui/material';
import { HairColorArray, EyebrowsArray, GlassesStyleArray } from './config';
import StyleSelect from './select';

// Avatar style
const AvatarStyleForm = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-4 w-full'>
			<Box>
				<Avataaar src='https://avataaars.io' />
			</Box>
			<Box className='w-full'>
				<StyleSelect
					variant='hairColor'
					label='头发颜色'
					selectArray={HairColorArray}
				/>
			</Box>
			<Box className='w-full'>
				<StyleSelect
					variant='eyebrowType'
					label='眉毛'
					selectArray={EyebrowsArray}
				/>
			</Box>

			<Box className='w-full'>
				<StyleSelect
					variant='accessoriesType'
					label='眼镜'
					selectArray={GlassesStyleArray}
				/>
			</Box>
		</div>
	);
};

export default AvatarStyleForm;

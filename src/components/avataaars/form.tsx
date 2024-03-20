import React from 'react';
import Avataaar from './avatar';
import { Box } from '@mui/material';
import {
	HairColorArray,
	EyebrowsArray,
	GlassesStyleArray,
	HairArray,
} from './config';
import StyleSelect from './select';

// Avatar style
const AvatarStyleForm = () => {
	return (
		<div className='p-16 flex flex-row justify-center items-center gap-4 w-full'>
			<Box>
				<Avataaar src='https://avataaars.io' />
			</Box>

			<Box className='flex flex-col gap-4'>
				<Box className='w-full'>
					<StyleSelect
						variant='topType'
						label='发型'
						selectArray={HairArray}
					/>
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
			</Box>
		</div>
	);
};

export default AvatarStyleForm;

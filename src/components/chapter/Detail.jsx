import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MomentUtil } from '../../utils/tools';
import { ChapterContext } from './ChapterContextProvider';

const Detail = () => {
	const { chapter } = useContext(ChapterContext);
	return (
		<div className='flex flex-col items-center gap-2 px-4'>
			<Typography
				variant='h5'
				className='text-purple-600'
			>
				{chapter.name}
			</Typography>
			<Typography
				className='text-gray-400'
				variant='body'
			>
				更新于：
				<MomentUtil value={chapter.UpdatedAt || new Date(2023, 11, 19)} />
			</Typography>
		</div>
	);
};

export default Detail;

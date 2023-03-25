/** @format */

import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MomentUtil } from '../../utils/tools';
import { ChapterContext } from './ChapterContextProvider';

const Detail = () => {
	const { chapter } = useContext(ChapterContext);
	return (
		<div className='flex flex-row items-end gap-4'>
			<Typography
				variant='h5'
				className='text-purple-600 font-semibold'
			>
				{chapter.name}
			</Typography>
			<Typography
				className='text-gray-400'
				variant='body'
			>
				更新于：
				<MomentUtil value={chapter.UpdatedAt} />
			</Typography>
		</div>
	);
};

export default Detail;

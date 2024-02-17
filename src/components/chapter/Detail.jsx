import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ChapterContext } from './ChapterContextProvider';
import momentAgo from 'moment-ago';

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
				更新于： <span>{momentAgo(new Date(chapter.UpdatedAt)).ago()}</span>
			</Typography>
		</div>
	);
};

export default Detail;

import { Typography } from '@mui/material';
import React from 'react';
import momentAgo from 'moment-ago';
import { useGlobalContext } from '../../../wrap-with-provider';

const Detail = () => {
	/*******************************************************************
	 * get single chapter from global context
	 *******************************************************************/
	const { chapter } = useGlobalContext();

	return (
		<div className='flex flex-col items-center gap-2 px-4 mt-6'>
			<Typography
				variant='h5'
				className='text-purple-600'
			>
				{chapter?.name}
			</Typography>
			<Typography
				className='text-gray-400'
				variant='body'
			>
				更新于： <span>{momentAgo(new Date(chapter?.UpdatedAt)).ago()}</span>
			</Typography>
		</div>
	);
};

export default Detail;

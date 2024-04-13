import { Box, Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import momentAgo from 'moment-ago';
import { useGlobalContext } from '../../../wrap-with-provider';
import { Link } from 'gatsby';
import { debugLog } from '../../utilities/utils';

const Detail = () => {
	/*******************************************************************
	 * get single chapter from global context
	 *******************************************************************/
	const { chapter } = useGlobalContext();
	debugLog(chapter);

	return (
		<>
			<div>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link to='/courses'>所有课程</Link>
					<Link to={`/courses/${chapter.course.id}`}>
						<Typography color='text.primary'>{chapter.course.name}</Typography>
					</Link>
				</Breadcrumbs>
			</div>
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
		</>
	);
};

export default Detail;

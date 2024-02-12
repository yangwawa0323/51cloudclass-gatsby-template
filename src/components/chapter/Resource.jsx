/** @format */

import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ChapterContext } from './ChapterContextProvider';
import { AiFillGithub } from 'react-icons/ai';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Link } from 'gatsby';
import { MdOutlineDirections } from 'react-icons/md';

const Resource = () => {
	const { chapter } = useContext(ChapterContext);
	return (
		<Box className='text-gray-600  rounded-xl border-2 p-4 mb-8'>
			<Typography className='text-purple-600 text-center font-semibold'>
				课件和实验资源
			</Typography>
			{chapter.github_resource?.length > 0 && (
				<Box className='p-6 flex flex-col items-end gap-2  cursor-pointer'>
					<Box className='flex flex-row gap-2 items-center justify-center'>
						<AiFillGithub fontSize='large' />
						<Link
							to={chapter.github_resource}
							target='_blank'
							rel='noreferrer'
						>
							<Typography>【{chapter.name}】 Github实验资源</Typography>
						</Link>
					</Box>
					<Typography variant='caption'>
						如何使用资源？点击查看云课堂资源下载视频
					</Typography>
				</Box>
			)}
			{chapter.online_running_code?.length > 0 && (
				<Box>
					<MdOutlineDirections />
					<p className='break-words text-center'>
						{chapter.online_running_code}
					</p>
				</Box>
			)}
			{chapter.download_resource?.length > 0 && (
				<Box>
					<IoCloudDownloadOutline />
					<p className='break-words text-center'>{chapter.download_resource}</p>
				</Box>
			)}
		</Box>
	);
};

export default Resource;

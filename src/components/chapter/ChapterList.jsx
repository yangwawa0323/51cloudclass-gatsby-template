/** @format */

import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';
import { ChapterContext } from './ChapterContextProvider';
import { debugLog, getAxios } from '../../utils/tools';
import { useQuery } from '@tanstack/react-query';

import { Link } from 'gatsby';

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({ chapter }) => {
	return (
		<Link to={`/chapters/${chapter.ID}/`}>
			<div className='flex flex-col px-8 pt-2'>
				<div>
					<p className='uppercase font-extrabold text-purple-700 text-sm'>
						第{chapter.order_index + 1}章
					</p>
				</div>
				<div>
					<h5 className='line-clamp-1'>{chapter.name}</h5>
				</div>
				<div>
					<p className='line-clamp-2'>
						How to improve your web design process in a few easy steps.
					</p>
				</div>
			</div>
		</Link>
	);
};

const ChapterList = () => {
	const { chapter } = useContext(ChapterContext);

	const fetchChaptersByCourseId = async () => {
		const axiosInstance = getAxios();
		let url = `${process.env.GATSBY_API_SERVER}/courses/${chapter.course_id}?preload=Chapters`;
		const response = await axiosInstance.get(url);
		return response.data;
	};

	const { data, isLoading, error } = useQuery(
		['fetch-chapters-by-course-id', chapter.course_id],
		fetchChaptersByCourseId
	);
	if (isLoading) return '加载Oo.';

	if (error) return `出错了! ${JSON.stringify(error)}`;

	// let chapters = sortBy(data?.result?.courses?.chapters, ['order_index']);
	const chapters = data.result.courses.chapters;
	debugLog('chapters : ', chapters);

	return (
		<Grid
			container
			className='border-2 shadow-md rounded-xl py-8'
		>
			<Grid
				item
				className='w-full'
			>
				<div className='py-2 flex flex-col justify-center items-center'>
					<p className='uppercase text-purple-700 font-extrabold'>课程章节</p>
				</div>
			</Grid>
			<SimpleBarScroll sx={{ maxHeight: 520 }}>
				{/* TODO: */}
				{chapters?.map((chpt, i) => (
					<Grid
						key={i}
						item
					>
						<ChapterContainer chapter={chpt} />
					</Grid>
				))}
			</SimpleBarScroll>
		</Grid>
	);
};

export default ChapterList;

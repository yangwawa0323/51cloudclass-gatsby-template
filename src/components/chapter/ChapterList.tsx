/** @format */

import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';
import { utils } from '51cloudclass-utilities/dist';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { debugLog } from '51cloudclass-utilities/src/utils';
import { IChapterInput } from '../../utils/types';
import { ChapterContext } from './ChapterContextProvider';

const { getAxios } = utils;

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({ chapter }: { chapter: IChapterInput }) => {
	return (
		<Link to={`/chapters/${chapter.id}/`}>
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

type TCourseChapters = {
	course_chapters: Array<IChapterInput>;
};

const ChapterList = () => {
	const { chapters } = useContext(ChapterContext);
	useEffect(() => {
		debugLog('ChapterList context :', chapters);
	}, []);

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
				{chapters?.map((chpt: IChapterInput, i: number) => (
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

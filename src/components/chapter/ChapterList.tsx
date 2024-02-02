/** @format */

import React, { useContext, useEffect, useState } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';
import { utils } from '51cloudclass-utilities/dist';

import { Link } from 'gatsby';
import { IChapterInput } from '../../utils/types';
import { ChapterContext } from './ChapterContextProvider';
import { Chapter } from '..';

const { getAxios } = utils;

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({
	chapter,
	order,
}: {
	chapter: IChapterInput;
	order: number;
}) => {
	const [showDetail, setShowDetail] = useState<boolean>(false);
	// console.log('key : ', order);
	return (
		<Link to={`/chapters/${chapter.id}/`}>
			<div className='flex flex-col px-8 pt-2'>
				<div>
					<p className='text-ellipsis truncate'>
						<span className='uppercase relative text-purple-700'>
							第{order + 1}章:{'  '}
						</span>
						<span>{chapter.name}</span>
					</p>
					<div
						className={
							(showDetail ? 'opacity-100' : 'opacity-0') +
							' z-10 -left-2 -top-10 rounded-md border border-neutral-500 text-indigo-900 bg-white shadow-lg p-4 absolute duration-1000 transition-all'
						}
						onMouseEnter={(event) => setShowDetail(true)}
						onMouseLeave={(event) => setShowDetail(false)}
					>
						{chapter.name}
					</div>
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
		// debugLog('ChapterList context :', chapters);
	}, []);

	return (
		<div className='max-w-[440px] w-full mx-0 md:mx-3 grid grid-cols-1 grid-flow-row border-2 shadow-md rounded-xl py-8'>
			<div className='flex flex-col justify-center items-center'>
				<h5 className='text-purple-700'>[ 课程章节 ]</h5>
			</div>
			<SimpleBarScroll sx={{ maxHeight: 520 }}>
				{/* TODO: */}
				{chapters
					?.sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
					.map((chpt: IChapterInput, i: number) => (
						<ChapterContainer
							key={i}
							order={chpt.order_index}
							chapter={chpt}
						/>
					))}
			</SimpleBarScroll>
		</div>
	);
};

export default ChapterList;

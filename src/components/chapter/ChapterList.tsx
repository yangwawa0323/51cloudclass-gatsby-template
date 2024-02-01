/** @format */

import React, { useContext, useEffect, useState } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';
import { utils } from '51cloudclass-utilities/dist';

import { Link } from 'gatsby';
import { IChapterInput } from '../../utils/types';
import { ChapterContext } from './ChapterContextProvider';

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
					<p className='uppercase font-extrabold text-purple-700 text-sm'>
						第{order + 1}章
					</p>
				</div>
				<div className='relative'>
					<h5 className='line-clamp-1'>{chapter.name}</h5>
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
		<div className='grid grid-cols-1 grid-flow-row border-2 shadow-md rounded-xl py-8'>
			<div className='w-10/12'>
				<div className='py-2 flex flex-col justify-center items-center'>
					<p className='font-extrabold'>课程章节</p>
				</div>
			</div>
			<SimpleBarScroll sx={{ maxHeight: 520 }}>
				{/* TODO: */}
				{chapters?.map((chpt: IChapterInput, i: number) => (
					<ChapterContainer
						key={i}
						order={i}
						chapter={chpt}
					/>
				))}
			</SimpleBarScroll>
		</div>
	);
};

export default ChapterList;

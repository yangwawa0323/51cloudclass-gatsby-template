/** @format */

import React from 'react';
import { useEffect, useState } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';
import { utils } from '51cloudclass-utilities/dist';

import { Link } from 'gatsby';
import { IChapterInput } from '../../utils/types';
import { Chapter } from '..';
import { debugLog } from '51cloudclass-utilities/src/utils';
import { useGlobalContext } from '../../../wrap-with-provider';

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({ chapter }: { chapter: IChapterInput }) => {
	const [showDetail, setShowDetail] = useState<boolean>(false);
	return (
		<div className='flex flex-col px-8 py-1'>
			<p className='text-ellipsis truncate'>
				<span className='uppercase relative text-purple-700'>
					第{chapter.order_index}章:{'  '}
				</span>
				<span>
					<Link to={`/chapters/${chapter.id}/`}>{chapter.name}</Link>
				</span>
			</p>
		</div>
	);
};

const ChapterList = () => {
	/*******************************************************************
	 * get chapters from global context
	 *
	 *******************************************************************/
	const { chapters } = useGlobalContext();

	return (
		<div className='max-w-[440px] w-full mx-0 md:mx-3 grid grid-cols-1 grid-flow-row border-2 shadow-md rounded-xl py-8'>
			<div className='flex flex-col justify-center items-center mb-8'>
				<h5 className='text-purple-700'>[ 课程章节 ]</h5>
			</div>
			<SimpleBarScroll sx={{ maxHeight: 520 }}>
				{/* TODO: */}
				{chapters
					?.sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
					.map((chpt: IChapterInput) => (
						<ChapterContainer
							key={chpt.id}
							chapter={chpt}
						/>
					))}
			</SimpleBarScroll>
		</div>
	);
};

export default ChapterList;

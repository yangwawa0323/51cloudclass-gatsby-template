/** @format */

import React, { useCallback, useEffect } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';

import { Link } from 'gatsby';
import { IChapterInput } from '../../utils/types';
import { Chapter } from '..';
import { useGlobalContext } from '../../../wrap-with-provider';
import { Typography, duration } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import gsap from 'gsap';
import { debugLog } from '51cloudclass-utilities/src/utils';

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({ chapter }: { chapter: IChapterInput }) => {
	const { isLogin } = useGlobalContext();
	const hasBilibili = useCallback(() => {
		return /BiliBiliIframePlugin/.test(chapter.content);
	}, []);
	return (
		<div className='flex flex-col px-8 py-1'>
			<p className='text-ellipsis truncate'>
				<span
					className={
						isLogin || hasBilibili()
							? 'uppercase relative text-purple-700'
							: 'text-gray-500'
					}
				>
					第{chapter.order_index}章:{'  '}
				</span>

				{((isLogin || hasBilibili()) && (
					<span className='text-purple-700'>
						<Link to={`/chapters/${chapter.id}/`}>{chapter.name}</Link>
					</span>
				)) || (
					<Typography
						component='span'
						variant='body1'
						color={grey[500]}
					>
						{chapter.name}
					</Typography>
				)}
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

	const tl = gsap.timeline();
	useEffect(() => {
		gsap.utils.toArray('.gsap-chapter').forEach((chapter, index) => {
			let tween = gsap.fromTo(
				chapter,
				{
					duration: 0.1,
					opacity: 0,
				},
				{
					duration: 0.1,
					opacity: 1,
				}
			);
			tl.add(tween);
		});
	}, []);

	return (
		<div className='max-w-[440px] w-full mx-0 md:mx-3 grid grid-cols-1 grid-flow-row border-2 shadow-md rounded-xl py-8'>
			<div className='flex flex-col justify-center items-center mb-8'>
				<h5 className='text-purple-700'>
					本课程 共有 [ {chapters.length} ] 章节
				</h5>
				<Typography
					variant='body2'
					className='text-gray-500'
				>
					提示:请滚动查看章节
				</Typography>
			</div>
			<SimpleBarScroll sx={{ maxHeight: 520 }}>
				{/* TODO: */}
				{chapters
					?.sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
					.map((chpt: IChapterInput) => (
						<div
							className='gsap-chapter'
							key={chpt.id}
						>
							<ChapterContainer chapter={chpt} />
						</div>
					))}
			</SimpleBarScroll>
		</div>
	);
};

export default ChapterList;

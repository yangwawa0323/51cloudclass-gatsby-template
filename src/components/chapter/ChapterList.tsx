/** @format */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SimpleBarScroll from '../common/SimpleBar';
import 'simplebar-react/dist/simplebar.min.css';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { Link } from 'gatsby';
import { IChapterInput } from '../../utils/types';
import { Chapter } from '..';
import { useGlobalContext } from '../../../wrap-with-provider';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import gsap from 'gsap';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import UnfoldLessDoubleRoundedIcon from '@mui/icons-material/UnfoldLessDoubleRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import UnfoldMoreDoubleRoundedIcon from '@mui/icons-material/UnfoldMoreDoubleRounded';

// import SimpleBar from 'simplebar-react';
const ChapterContainer = ({ chapter }: { chapter: IChapterInput }) => {
	const { isLogin } = useGlobalContext();
	const hasBilibili = useCallback(() => {
		return /BiliBiliIframePlugin/.test(chapter.content);
	}, []);
	return (
		<div className='w-full'>
			<Accordion
				disableGutters
				square
				defaultExpanded={chapter.order_index === 0}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<Typography
						noWrap
						sx={{ maxWidth: 280, width: '100%' }}
						className={
							isLogin || hasBilibili()
								? 'relative text-purple-700'
								: 'text-gray-500'
						}
					>
						第{chapter.order_index + 1}章:{'  '} {chapter.name}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<OndemandVideoRoundedIcon sx={{ color: 'GrayText' }} />

					{(hasBilibili() && (
						<span className='text-purple-700 ml-2'>
							<Link to={`/chapters/${chapter.id}/`}>{chapter.name}</Link>
						</span>
					)) || (
						<Typography
							component='span'
							variant='body1'
							color={grey[500]}
							sx={{ pl: '8px' }}
						>
							<Link to={`/chapters/${chapter.id}/`}>{chapter.name}</Link>
						</Typography>
					)}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

const ChapterList = () => {
	/*******************************************************************
	 * get chapters from global context
	 *
	 *******************************************************************/
	const { chapters } = useGlobalContext();
	const [showCount, setShowCount] = useState(10);

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

	const hasMore = useCallback(() => chapters.length > showCount, [showCount]);
	const moreStyle = useMemo(() => {
		return hasMore()
			? {
					maskImage:
						'linear-gradient(rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%)',
			  }
			: {};
	}, [showCount]);

	return (
		<div className='max-w-[440px] w-full mx-0 md:mx-3 grid grid-cols-1 grid-flow-row border-2 shadow-md  py-8'>
			<div className='flex flex-col justify-center items-center mb-8'>
				<h5 className='text-purple-700'>
					本课程 共有 [ {chapters?.length ?? 0} ] 章节
				</h5>
				<Typography
					variant='body2'
					className='text-gray-500'
				>
					提示:请滚动查看章节
				</Typography>
			</div>
			<div
				className='transition-all duration-1000'
				onMouseOver={(e) => {
					let target = e.currentTarget;
					target.style.maskImage = 'none';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.maskImage = moreStyle.maskImage;
				}}
				style={{
					...moreStyle,
				}}
			>
				{chapters
					?.sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
					.slice(0, showCount)
					.map((chpt: IChapterInput) => (
						<div
							className='gsap-chapter'
							key={chpt.id}
						>
							<ChapterContainer chapter={chpt} />
						</div>
					))}
			</div>
			{(hasMore() && (
				<div
					className='hover:bg-purple-400 hover:text-white duration-150 border-y-2 bg-gray-100 py-2 justify-center items-center gap-4 flex text-gray-500'
					role='button'
					onClick={() => {
						setShowCount((prev) => prev + 10);
					}}
				>
					更多
					<span className='decoration-wavy rounded-sm px-2 border-[1px] border-purple-300'>
						{chapters.length - showCount}
					</span>
					章节
					<UnfoldMoreDoubleRoundedIcon />
				</div>
			)) || (
				<div
					className='hover:bg-purple-500 hover:text-white duration-150 border-y-2 bg-gray-100 py-2 text-center justify-center items-center flex gap-4 text-gray-500'
					role='button'
					onClick={() => {
						scrollTo('#frame-top');
						setShowCount(10);
					}}
				>
					<Typography>折叠收拢</Typography>
					<UnfoldLessDoubleRoundedIcon />
				</div>
			)}
		</div>
	);
};

export default ChapterList;

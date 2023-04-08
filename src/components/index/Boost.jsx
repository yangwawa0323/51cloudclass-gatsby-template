/**
 * Index media query fitness completed.
 *
 * @format
 */

import * as React from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';

import pictures from '../../utils/image';
import pageJsonData from '../../data/completed-page.json';
import { debugLog } from '../../utils/tools';

const boostSectionAnimation = (timeline) => {
	const wrapper = document.querySelector('.boost-section-wrapper');

	timeline = timeline || gsap.timeline();

	gsap.set(wrapper, { opacity: 0.3 });
	timeline.to(wrapper, {
		y: `20%`,
		duration: 1.5,
		opacity: 1,
	});

	return timeline;
};

/**
 *
 * @param {*} timeline  : global gsap.timeline
 * @param {*} boxes : the box elements is generated by `getScrollPageGrid` function ,
 * 						 this function is called in `React.useEffect` which the time boxes is not rendered.
 * 						 by using `document.querySelectorAll` would got an empty NodeList array.
 */
const scrollingPagesAnimation = (timeline /* boxes */) => {
	// var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

	timeline = timeline || gsap.timeline();

	const boxes = document.querySelectorAll('.box'),
		size = boxes.length,
		blkHeight = 400,
		/*****IMPORTANT******
		 * Change the blkHeight
		 *
		 * */
		distance = size * blkHeight;

	gsap.utils
		.toArray('.box')
		.reverse()
		.forEach((box, i) => {
			gsap.set(box, {
				y: () => i * blkHeight,
			});

			timeline.to(
				box,
				{
					duration: 25,
					ease: 'none',
					y: `+=${distance}`, //move each box to rightmost as order.
					modifiers: {
						y: gsap.utils.unitize((y) => distance - (parseFloat(y) % distance)),
					},
					repeat: -1,
				},
				'<'
			);
		});
};

const BoostSection = () => {
	const { pages } = pageJsonData;

	const [timeline, setTimeline] = React.useState(null);

	React.useEffect(() => {
		const globalTimeline = gsap.timeline();
		setTimeline(globalTimeline);
		boostSectionAnimation(globalTimeline);

		//IMPORTANT: the scrolling page boxes is generated by `getScrollPageGrid` function which return the JSX elements.
		// but inside the `scrollingPageAnimation` function we get DOM by use `document.querySelectorAll` function.
		// in that rendering time the DOM the not yet exists, so we make a little delay to run the `scrollingPageAnimation`
		// function that make sure the DOM has been rendered properly.
		setTimeout(() => scrollingPagesAnimation(globalTimeline), 2000);
	}, [pages]);

	const getScrollPageGrid = (pages) => {
		let pageList = [];
		for (let index in pages) {
			const page = pages[index];
			pageList.push(
				<Link
					key={index}
					className='pointer-events-auto '
					to={page.route}
				>
					<img
						src={
							pictures[
							page.route
								.replace('/', '')
								.replace('404', 'page404')
								.replace(/asciinema-list/, 'asciinema')
							]
						}
						alt={page.title}
					/>
				</Link>
			);
		}

		let content = [];

		// Make sure the pageList is even
		const girdRows = Math.floor(pageList.length / 2);
		for (let i = 0; i < girdRows; i++) {
			content.push(
				<div
					key={i}
					className='box grid grid-cols-2 gap-4'
				>
					{pageList.pop()}
					{pageList.pop()}
				</div>
			);
		}
		debugLog(content);
		return content;
	};

	const pauseAnimation = () => {
		timeline?.pause();
	};

	const resumeAnimation = () => {
		timeline?.resume();
	};

	return (
		<div
			className='w-full h-[80vh] overflow-hidden items-center justify-center flex flex-col'
			style={{
				// gap: '141px',
				background:
					'radial-gradient(106.9% 91.8% at 100% 100%, #b09eff 0%, var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(255, 255, 255))  100%)',
			}}
		>
			<div className='w-4/5 border-red-400 items-center justify-center flex flex-row max-w-[1300px] overflow-visible relative gap-12'>
				{/* boost section   */}
				<div className='boost-section-wrapper  flex flex-col gap-4 overflow-visible h-min max-w-[451px]'>
					<div>
						<p className='text-purple-500  font-extrabold uppercase hover:underline'>
							2023年开年大戏
						</p>
					</div>
					<div>
						<h2 className='inline-block'>
							<span
								className='gradient-text'
								style={{
									backgroundImage:
										'linear-gradient(15deg, rgb(102, 0, 255) 0%, rgb(255, 0, 102) 100%)',
								}}
							>
								可以复制内容的视频
							</span>
						</h2>
					</div>
					<div>
						<p className=' boost-pbtn text-xl font-medium text-gray-600'>
							简化学习，我们提供完备的学习实验的课件资料，你只需要复制视频中的内容，或者同步Github项目代码就能为你初始化一个基本的实验环境。快人一步进入学习状态，每天都在成长。
						</p>
					</div>
					<div className='flex gap-3 overflow-visible items-center justify-center'>
						<div>
							<p className='boost-pbtn rounded-l-xl shadow-lg py-4 px-6 duration-1000 bg-purple-600 hover:bg-purple-800 text-white text-[18px] font-semibold tracking-tighter'>
								尝试一下
							</p>
						</div>
						<div>
							<p className='rounded-r-xl shadow-lg py-4 px-6 bg-white duration-1000 hover:bg-slate-200 text-grey-600 text-[18px] font-semibold tracking-tighter'>
								了解更多
							</p>
						</div>
					</div>
				</div>

				{/* vertical scrolling pages  */}
				{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
				<div
					className='wrapper hidden lg:block'
					// eslint-disable-next-line jsx-a11y/no-static-element-interactions
					onMouseLeave={resumeAnimation}
					onMouseEnter={pauseAnimation}
				>
					<div className='boxes'>{getScrollPageGrid(pages)}</div>
				</div>
			</div>
		</div>
	);
};

export default BoostSection;

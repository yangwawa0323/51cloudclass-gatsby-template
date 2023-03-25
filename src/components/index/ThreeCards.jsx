/** @format */

import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PaletteIcon from '@mui/icons-material/Palette';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gradientColor } from '../../utils/tools';

const ThreeCards = () => {
	ScrollTrigger.defaults({});
	gsap.registerPlugin(ScrollTrigger);

	React.useEffect(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.building-block',
				scrub: 1,
				start: 'bottom 75%',
				end: 'top 45%',
				// markers: true
			},
		});

		const cards = gsap.utils.toArray('.card');

		cards.forEach((card, index) => {
			timeline.from(card, {
				y: 100,
				opacity: 0,
				// duration: 1.3,
			});
		});
	}, []);

	return (
		<div
			className='grid auto-rows-min justify-center gap-5 overflow-visible sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
			// style={{
			// 	gridTemplateRows: 'repeat(2 , min-content)',
			// 	gridTemplateColumns: 'repeat(3 , minmax(200px, 1fr))',
			// 	height: '443px',
			// 	maxWidth: '1200px',
			// }}
		>
			<div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card'>
				<div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
					<div className='text-purple-500'>
						<LayersIcon />
					</div>
				</div>
				<div className='flex gap-4 flex-col'>
					<div>
						<div className='text-center'>
							<h3 className='text-xl'>
								<span className='text-purple-600 font-extrabold text-3xl'>
									25+
								</span>
								专业精品课程
							</h3>
						</div>
						<div>
							<p className='text-gray-600 leading-7'>
								由职业教育十几载的杨老师针对目前大数据，云平台运维特别录制了
								<span className='text-purple-600 text-2xl'>25+</span>
								门以上的Linux运维和全栈开发课程。每一门课程都是针对互联网企业招聘所需而大学未普及授课的黑科技。它是一个有基础入门到高端的系统化的课程体系。
							</p>
						</div>
					</div>
					<div>
						<div className='cursor-pointer text-purple-500 text-sm font-bold'>
							<div className='flex flex-row gap-1'>
								<div>
									<p>了解更多</p>
								</div>
								<div>
									<div>
										<ArrowForwardIcon fontSize='1rem' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card'>
				<div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
					<div className='text-purple-500'>
						<PaletteIcon />
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div>
						<div className='text-center'>
							<h3 className='text-xl flex items-center'>
								<span
									style={{ ...gradientColor }}
									className='text-6xl font-extrabold -rotate-12 translate-x-10 -translate-y-10'
								>
									￥51
								</span>
								&nbsp; 包月学习
							</h3>
						</div>
						<div>
							<p className='text-gray-600 leading-7'>
								51元包月任你学，打破高额付费课程格局，每月只需51元即可同时学习多门课程，最大化学习进度以及最小的学习成本。我们助力您的职场生涯，课程沉淀式更新，你可以按照规划的线路全程学习，也可以针对个别课程充电式学习，而这一切都不用单独高额购买课程。
							</p>
						</div>
					</div>
					<div>
						<div className='cursor-pointer text-purple-500 font-bold text-sm'>
							<div className='flex flex-row gap-1'>
								<div>
									<p>学习路线规则</p>
								</div>
								<div>
									<ArrowForwardIcon fontSize='1rem' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card'>
				<div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
					<div className='text-purple-500'>
						<ViewInArIcon />
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<div>
						<div className='text-center'>
							<h3 className='text-xl'>
								<span className='text-purple-600 text-3xl'>1020+ </span>
								课程视频
							</h3>
						</div>
						<div>
							<p className=' text-gray-700 leading-7'>
								多达1020+以上的课程视频，分成入门，进阶，高端三类，覆盖课程知识讲解，学习相关问题解答。贯穿在您的学习过程中，视频时长7-15分钟，你可以利用碎片时间掌握行业内的诸多新科技。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeCards;

/** @format */

import { Link } from 'gatsby';
import * as React from 'react';
import gsap from 'gsap';

const pillsAnimation = () => {
	gsap.to('.gsap-pills > div', {
		x: '-200px',
		repeat: -1,
		duration: 20,
		yoyo: true,
	});
};

const FractionSection = () => {
	const [classes] = React.useState([
		'Linux操作系统',
		'MySQL/MariaDB数据库',
		'Ansible自动化',
		'Python编程',
		'Flask后台开发',
		'Django框架',
		'Docker容器',
		'Openstack云平台',
		'MongoDB数据库',
		'Javascript',
		'Typescript',
		'React前端框架',
	]);

	React.useEffect(() => {
		pillsAnimation();
	}, []);

	return (
		<div className='flex flex-col items-center justify-center gap-6 py-24 overflow-hidden'>
			<div className='flex flex-col gap-4 items-center justify-center h-min max-w-[560px] text-white'>
				<div>
					<p className='uppercase font-extrabold text-gray-300'>课程知识</p>
				</div>
				<div className='text-center'>
					<h2 className='text-white'>互联网职场技术一览表</h2>
				</div>
				<div className='flex flex-row gap-4 justify-center items-center'>
					<div className='flex item-center justify-center py-3 px-5 bg-white rounded-md'>
						<Link to='/'>
							<p className='text-[18px] text-gray-800 font-semibold'>
								了解详细信息
							</p>
						</Link>
					</div>
					<div>
						<div
							className='py-3 px-5 rounded-md'
							style={{
								backgroundColor: 'rgb(69, 18, 151)',
							}}
						>
							<p className='font-semibold'>观看视频</p>
						</div>
					</div>
				</div>
			</div>
			<div className='text-white svg-h4-white'>
				<div className='gsap-pills h-10 flex flex-row gap-4'>
					{classes.map((cls, index) => (
						<div
							key={index}
							className='rounded-[100px] flex flex-row items-center justify-center gap-4 py-2 px-4'
							style={{
								backgroundColor: 'rgba(25, 21, 78, 0.2)',
							}}
						>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 256'
									focusable='false'
								>
									<g
										color='var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, rgb(246, 244, 255)) /* {"name":"Purple Light"} */'
										weight='fill'
									>
										<path d='M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z'></path>
									</g>
								</svg>
							</div>
							<div>
								<h4>{cls}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FractionSection;

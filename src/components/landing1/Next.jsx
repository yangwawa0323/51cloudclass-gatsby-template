/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import changelog from '../../assets/img/page-thumbnail/changelog.webp';
import page404 from '../../assets/img/page-thumbnail/page_404.webp';
import styleguide from '../../assets/img/page-thumbnail/styleguide.webp';
import booststart from '../../assets/img/page-thumbnail/boost_start.webp';
import legal from '../../assets/img/page-thumbnail/legal.webp';
import price2 from '../../assets/img/page-thumbnail/price.webp';
import mapPicture from '../../assets/img/page-thumbnail/map.webp';
import blog1 from '../../assets/img/page-thumbnail/blog1.webp';
import blog2 from '../../assets/img/page-thumbnail/blog2.webp';
import about1 from '../../assets/img/page-thumbnail/about1.webp';

import gsap from 'gsap';

const animation = () => {
	// const wrapper = document.querySelector('.next-website  div > ul');
	const boxes = document.querySelectorAll('.next-website div >  ul > li');
	const size = boxes.length;
	const gap = 32;
	const unit = 400 + gap;

	gsap.set(boxes, {
		x: (index) => `${(size + index) * unit}`, // move to right most side
	});

	gsap.to(boxes, {
		duration: 45,
		ease: 'none',
		x: `-=${size * unit} `, //move each box to left
		modifiers: {
			x: gsap.utils.unitize(
				(x) => (parseFloat(x) % parseInt(`${size * unit}`)) - unit
			), //force x value to be between 0 and 500 using modulus
		},
		repeat: -1,
	});
};

const NextWebsite = () => {
	React.useEffect(() => {
		animation();
	}, []);

	return (
		<div className='min-w-[425px] next-website overflow-hidden flex flex-col gap-8 py-16  justify-center items-center'>
			<div className='flex flex-col justify-center items-center max-w-[500px] gap-3'>
				<p className='text-sm font-extrabold text-purple-700 uppercase'>
					complete toolkit
				</p>
				<h2 className='text-center'>Building blocks for your next website.</h2>
				<p className='text-gray-600 font-bold text-sm'>
					Build a unique experience by mixing and matching components. Make your
					brand shine.
				</p>
			</div>
			<div
				className='h-[300px] overflow-hidden w-full'
				style={{
					WebkitMaskImage:
						'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)',
				}}
			>
				<ul className='flex flex-row gap-8 flex-nowrap relative'>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={changelog}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={page404}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={styleguide}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={booststart}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={legal}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={price2}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={mapPicture}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={blog1}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={blog2}
						/>
					</li>
					<li className='absolute'>
						<img
							alt=''
							className='w-[400px] h-auto rounded-t-lg shadow-lg border-[1px] border-gray-300'
							src={about1}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NextWebsite;

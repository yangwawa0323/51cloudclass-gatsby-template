/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const sliderWrapperAnimation = () => {
	const slider = document.querySelector('.slider-wrapper');

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: '.landing4-boost-section',
			start: 'bottom center',
			end: 'bottom center',
			// scrub: 1,
			toggleActions: 'play none none reverse',
			// markers: true,
			duration: 1.5,
		},
	});
	timeline.from(slider, {
		y: '+=500px',
		opacity: 0.5,
	});
};

const OurSuccess = () => {
	const [index, setIndex] = React.useState(0);
	const [size, setSize] = React.useState(0);
	const [aniCompleted, setAniCompleted] = React.useState(true);
	const [images, setImages] = React.useState([]);

	gsap.registerPlugin(ScrollTrigger);

	React.useEffect(() => {
		const images = document.querySelectorAll('.scrolling-slider img');

		/**
		 * Initailize
		 */
		setImages(images);
		setSize(images.length);
		setIndex(0);

		/**
		 * Page animation
		 *  */
		sliderWrapperAnimation();
	}, []);

	const sliderAnimation = (direction = 'left') => {
		let x;
		setAniCompleted(false);

		if (direction === 'left') {
			x = '-=100%';
		} else if (direction === 'right') {
			x = '+=100%';
		}
		gsap.to(images, {
			x,
			onComplete: () => setAniCompleted(true),
		});
	};

	const toLeft = () => {
		sliderAnimation('left');
		setIndex(index + 1);
	};

	const toRight = () => {
		sliderAnimation('right');
		setIndex(index - 1);
	};

	return (
		<div className='slider-wrapper w-full p-24 flex  flex-col lg:flex-row gap-24 overflow-hidden'>
			{/* slider images  */}

			<div className='scrolling-slider h-[558px] bg-red-100 rounded-lg shadow-sm relative border-[1px] flex-1 flex flex-row overflow-hidden max-w-[1200px] will-change-transform gap-0'>
				{/* <div className='h-full w-full -translate-x-[50%] rounded-lg overflow-hidden'> */}
				<img
					className='h-full w-[720px] flex-1 object-cover rounded-lg'
					src='https://framerusercontent.com/images/x8MsMLzPw4oCKSmMNOuZy76n2Is.jpg?scale-down-to=2048'
					alt='People in the office'
				/>
				<img
					className='h-full w-[720px] flex-1 object-cover'
					src='https://framerusercontent.com/images/2pg0fQYYej7N8XeGM88yj3SlQ.jpg?scale-down-to=2048'
					alt='People in the office'
				/>
				<img
					className='h-full w-[720px] flex-1 object-cover'
					src='https://framerusercontent.com/images/Pz5ekF4c6XYu5aMYYpM3nenmv4.jpg?scale-down-to=2048'
					alt='People in the office'
				/>

				{index < size - 1 && (
					<div
						style={{ visibility: aniCompleted ? 'visible' : 'hidden' }}
						className='cursor-pointer absolute top-1/2 left-4 z-50 h-8 w-8 shadow-md bg-white hover:bg-gray-100 rounded-full flex justify-center items-center'
					>
						<IoIosArrowRoundForward
							onClick={toLeft}
							fontSize='10px'
						/>
					</div>
				)}
				{index !== 0 && (
					<div
						style={{ visibility: aniCompleted ? 'visible' : 'hidden' }}
						className='absolute top-1/2 right-4 z-50 h-8 w-8 shadow-md bg-white hover:bg-gray-100 rounded-full flex justify-center items-center'
					>
						<IoIosArrowRoundForward
							onClick={toRight}
							fontSize='10px'
						/>
					</div>
				)}
			</div>

			{/*  */}
			<div className='flex-1 flex flex-col gap-10'>
				<div className='flex flex-col gap-4'>
					<div>
						<p className='uppercase text-purple-800 font-extrabold'>
							Our success
						</p>
					</div>
					<div>
						<h2 className='break-words'>
							Leading development for modern teams.
						</h2>
					</div>
					<div>
						<p className='text-gray-600 break-words'>
							Create beautiful pages within minutes directly in Framer. Easily
							customize images, content, and style to make it your own.
						</p>
					</div>
				</div>
				<div className='grid grid-rows-2 grid-cols-2 gap-2 h-min justify-center'>
					<div className='flex flex-col  justify-center items-center '>
						<div className='bg-purple-700 rounded-xl p-6 lg:min-w-[200px]'>
							<div>
								<h2 className='text-white text-[30px] lg:text-[60px]'>25+</h2>
							</div>
							<div>
								<p className='text-gray-300'>Prebuilt Pages</p>
							</div>
						</div>
					</div>

					<div className='flex flex-col justify-center items-center '>
						<div className='bg-purple-700 rounded-xl p-6 min-w-[100px]'>
							<div>
								<h2 className='text-white'>60+</h2>
							</div>
							<div>
								<p className='text-gray-300'>Sections</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurSuccess;

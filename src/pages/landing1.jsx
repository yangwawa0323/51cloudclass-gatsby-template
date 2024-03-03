/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import gsap from 'gsap';
import BoostSection from '../components/landing1/Boost';
import BuildingBlock from '../components/landing1/Building';
import WatchVideo from '../components/landing1/Watch';
import NextWebsite from '../components/landing1/Next';
import FractionSection from '../components/landing1/Fraction';
import { Link } from 'gatsby';
import Frame from '../components/frame';

const scrollAnimation = () => {
	gsap.from('.boost-your-website .explore-pages', {
		scrollTrigger: {
			trigger: '.boost-your-website',
		},
		y: '+=50%',
		opacity: 0.7,
	});

	gsap.from('.building-block > div', {
		scrollTrigger: {
			trigger: '.building-block',
		},
		y: '+=30%',
		opacity: 0.5,
	});

	gsap.from('.watch-the-video  .video-content', {
		scrollTrigger: {
			trigger: '.watch-the-video',
		},
		y: '+=30%',
		opacity: 0.5,
	});

	gsap.from('.next-website > div', {
		scrollTrigger: {
			trigger: '.next-website',
		},
		y: '+=30%',
		opacity: 0.5,
	});

	gsap.from('.fraction-section > div', {
		scrollTrigger: {
			trigger: '.fraction-section',
		},
		y: '+=30%',
		opacity: 0.5,
	});

	//  gsap.from('.try-it-now > div', {
	//   scrollTrigger: {
	//     trigger: '.try-it-now'
	//   },
	//   y: '+=30%',
	//   opacity: 0.5,
	// });
};

const Landing1 = () => {
	React.useEffect(() => {
		scrollAnimation();
	}, []);

	return (
		<div>
			{/*  */}
			<div
				style={{
					background: 'rgb(116, 33, 252)',
				}}
				className='flex justify-center items-center p-4 z-10 sticky top-0'
			>
				<div className='flex flex-row gap-2 '>
					<p className='text-xs text-white font-medium'>
						Explore brand new Boost template.
					</p>
					<Link
						to='/'
						className='flex flex-row gap-2 cursor-pointer'
					>
						<h5 className='text-xs text-white font-medium'>Learn more</h5>
						<IoIosArrowRoundForward
							className='hover:translate-x-1 transition-all duration-700'
							fontSize='10px'
							htmlColor='white'
						/>
					</Link>
				</div>
			</div>
			{/*  */}
			<Frame>
				{/*  */}
				<BoostSection />
				{/*  */}
				<BuildingBlock />
				{/*  */}
				<WatchVideo />
				{/*  */}
				<NextWebsite />
				{/*  */}
				<FractionSection />
				{/*  */}
			</Frame>
		</div>
	);
};

export default Landing1;

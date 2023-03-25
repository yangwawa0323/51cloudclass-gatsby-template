/**
 * Media query is OK.
 *
 * @format
 */

import React from 'react';

const BoostSection = () => {
	return (
		<div className='min-w-[425px]  boost-your-website relative xs:h-[30vh] h-[100vh] lg:items-center flex flex-col lg:pt-[240px] pt-[120px] items-center z-[1] px-24 xs:gap-8 gap-20 overflow-hidden'>
			<div className='absolute inset-0 pointer-events-none select-none'>
				<img
					className='object-cover'
					src='https://framerusercontent.com/images/yRrxkmtKj7pwDfc0FGhTxIE4fFc.jpg'
					alt=''
				/>
			</div>
			<div className='explore-pages z-[2] flex flex-col gap-4 justify-center items-center max-w-[680px]'>
				<div>
					<p className='text-gray-300 uppercase font-bold text-sm'>
						Free Framer Template
					</p>
				</div>
				<div>
					<h1 className='text-white xs:text-[48px]'>Boost your website.</h1>
				</div>
				<div>
					<p className='text-white text-center font-medium text-[24px] break-words'>
						Quickly assemble pages from various categories and customize them to
						your business's needs.
					</p>
				</div>
				<div>
					<p className='rounded-lg px-6 py-3 bg-white hover:bg-gray-200 duration-700 font-medium text-sm'>
						Explore Pages
					</p>
				</div>
			</div>
		</div>
	);
};

export default BoostSection;

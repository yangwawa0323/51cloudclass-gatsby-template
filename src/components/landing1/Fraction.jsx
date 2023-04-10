/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';

const FractionSection = () => {
	return (
		<div className='fraction-section bg-[#7421fc] justify-center items-center flex flex-col py-20'>
			<div className=' flex flex-row gap-16 h-min max-w-[1200px] px-8 justify-center items-center'>
				<div className='flex-1 flex  flex-col gap-[20px] max-w-[530px] min-w-[200px]'>
					<div>
						<p className='text-gray-400 uppercase font-extrabold'>
							Fraction template
						</p>
						<h2 className='text-white xs:text-3xl'>
							Build a website that performs better.
						</h2>
					</div>
					<div>
						<p className='rounded-md bg-white hover:bg-gray-200 hover:shadow-xl cursor-pointer transition-all duration-500  px-4 py-3 text-center text-xs whitespace-nowrap font-semibold w-min'>
							Use Template
						</p>
					</div>
				</div>
				<div className='flex-1 rounded-2xl overflow-hidden shadow-lg h-auto w-auto '>
					<img
						className='aspect-[1.23/1] object-cover object-center'
						src='https://framerusercontent.com/images/9b6RR8taFg9vAsG9W9YpMqSrSD8.png?scale-down-to=1024'
						alt='Website examples'
					/>
				</div>
			</div>
		</div>
	);
};

export default FractionSection;

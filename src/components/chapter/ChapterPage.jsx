/** @format */

import React from 'react';
import ChapterContextProvider from './ChapterContextProvider';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Frame from '../frame';

const ChapterPage = (props) => {
	const { pageContext } = props;
	const extra = { chapter: pageContext.chapter };

	return (
		<Frame>
			<ChapterContextProvider extraContext={extra}>
				<div className='flex flex-row flex-wrap  lg:gap-6 xs:gap-2 justify-center pt-12'>
					<div className='xs:max-md:basis-full basis-7/12  w-11/12 xs:max-w-[425px] md:min-w-[600px]'>
						<LeftPane />
					</div>
					<div className='xs:max-md:basis-full basis-3/12 w-11/12 min-w-[300px]'>
						<RightPane />
					</div>
				</div>
				<div className='stay-in-the-loop-form flex flex-col p-16 justify-center items-center bg-white'>
					<div className='flex flex-col justify-center items-center max-w-[500px] gap-4'>
						<div>
							<p className='uppercase text-purple-700 font-extrabold'>
								stay in the loop
							</p>
						</div>
						<div>
							<h2 className='break-words text-center'>
								Subscribe for more inspiration.
							</h2>
						</div>
						<div>
							<div>
								<form className='relative flex flex-row justify-center items-center h-min'>
									<div className='hidden absolute'>
										<input
											type='text'
											tabIndex='-1'
										/>
									</div>
									<input
										className='h-full p-[15px] focus:bg-gray-200   bg-gray-100 text-gray-800 rounded-l-lg border-none outline-none'
										type='email'
										name='email'
										placeholder='email@framer.com'
									/>
									<div>
										<input
											className='h-full p-[15px] border-none rounded-r-lg text-white bg-purple-700 hover:bg-purple-600 text-sm duration-500  hover:text-gray-400'
											value='subscribe'
											type='submit'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</ChapterContextProvider>
		</Frame>
	);
};

export default ChapterPage;

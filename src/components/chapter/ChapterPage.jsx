/** @format */

import { Box, Grid } from '@mui/material';
import React from 'react';
import ChapterContextProvider from './ChapterContextProvider';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import { debugLog } from '../../utils/tools';

const ChapterPage = (props) => {
	const { pageContext } = props;
	const extra = { chapter: pageContext.chapter };
	debugLog('In chapter page pageContext is:', pageContext);

	return (
		<div>
			<Navbar />
			<ChapterContextProvider extraContext={extra}>
				<main className='min-w-[425px] pt-[64px]'>
					<div className='flex flex-row flex-wrap px-12 lg:px-0 lg:gap-6 xs:gap-2 justify-center items-center'>
						<div className='basis-full xl:basis-7/12 min-w-[600px]'>
							<LeftPane />
						</div>
						<div className='basis-full xl:basis-3/12 min-w-[300px]'>
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
				</main>
			</ChapterContextProvider>
			<Footer />
		</div>
	);
};

export default ChapterPage;

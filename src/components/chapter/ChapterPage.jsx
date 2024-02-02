import React from 'react';
import ChapterContextProvider from './ChapterContextProvider';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Frame from '../frame';
import BootSection from './BootSection';
import gsap from 'gsap';
import { easeIn } from '../../utils/animate';
import { graphql } from 'gatsby';
import { Container } from '@mui/material';

export const query = graphql`
	query MyQuery($uuid: String) {
		chapter(id: { eq: $uuid }) {
			CreatedAt
			UpdatedAt
			id
			mark
			name
			online_running_code
			order_index
			row_count
			course_id
			content
			download_resource
			github_resource
			course {
				chapters {
					order_index
					name
					id
				}
			}
		}
	}
`;

const ChapterPage = (props) => {
	React.useEffect(() => {
		// animation();
		// gsap.config({ nullTargetWarn: false })
		const tl = gsap.timeline();
		// easeIn('.gsap-boot-section', {}, tl);
		easeIn('.gsap-course-name-div', {}, tl);
		easeIn('.gsap-home-hero-left', {}, tl);
		easeIn('.gsap-home-hero-right', { delay: 0.5 }, tl);
	}, []);

	const { data } = props;

	// change to graphQL query data
	// const extra = { chapter: pageContext.chapter };
	if (!data.chapter.course) {
		return (
			<div>
				{' '}
				<h2>Some thing wrong</h2>
				<pre>{JSON.stringify(data.chapter)}</pre>
			</div>
		);
	}
	const extra = {
		chapters: data.chapter.course.chapters,
		chapter: data.chapter,
	};

	return (
		<Frame>
			<ChapterContextProvider extraContext={extra}>
				<div className='w-full mb-10'>
					<BootSection />
				</div>
				<Container>
					<div className='mx-0 md:mx-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
						<div className='col-span-1 sm:col-span-1 md:col-span-2'>
							<LeftPane />
						</div>
						<div className='col-span-1'>
							<RightPane />
						</div>
					</div>
					{/* <div className='py-[120px] gsap-relative'>
					<Relative />
				</div> */}
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
				</Container>
			</ChapterContextProvider>
		</Frame>
	);
};

export default ChapterPage;

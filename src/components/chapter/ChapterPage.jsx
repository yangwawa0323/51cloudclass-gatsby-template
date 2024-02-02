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
	// React.useEffect(() => {
	// animation();
	// gsap.config({ nullTargetWarn: false })
	// const tl = gsap.timeline();
	// easeIn('.gsap-boot-section', {}, tl);
	// easeIn('.gsap-course-name-div', {}, tl);
	// easeIn('.gsap-home-hero-left', {}, tl);
	// easeIn('.gsap-home-hero-right', { delay: 0.5 }, tl);
	// }, []);

	const { data } = props;

	// change to graphQL query data
	// const extra = { chapter: pageContext.chapter };
	if (!data.chapter.course) {
		return (
			<div>
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
				<Container className='mb-16'>
					<div className='mx-0 md:mx-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
						<div className='col-span-1 sm:col-span-1 md:col-span-2'>
							<LeftPane />
						</div>
						<div className='col-span-1'>
							<RightPane />
						</div>
					</div>
					{/* 
					<div className='py-[120px] gsap-relative'>
						<Relative />
					</div> 
					*/}
				</Container>
			</ChapterContextProvider>
		</Frame>
	);
};

export default ChapterPage;

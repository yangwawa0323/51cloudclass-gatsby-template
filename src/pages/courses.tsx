/**
 * Media query is OK.
 *
 * @format
 */

import { Link, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Frame from '../components/frame';
import '../styles/pages/_course-main.scss';
import { Divider } from '@mui/material';

/* tslint:disable */
import { utils } from '51cloudclass-utilities/dist';
import good from '../assets/img/courses/good.png';
import business from '../assets/img/courses/business-revenue.png';
import formation from '../assets/img/courses/formaṭion-status.png';
import esstimated from '../assets/img/courses/esstimated-processing.png';
import level01 from '../assets/img/courses/level-01.svg';
/* tslint:enable  */
import { easeIn } from '../utils/animate';
import shuffle from 'lodash/shuffle';
import { Course } from '../components';

const { getAxios } = utils;

gsap.registerPlugin(ScrollTrigger);

// const animation = () => {
// gsap.from('.entire-blog', {
// 	opacity: 0.6,
// 	y: '+10%',
// 	duration: 1.5,
// });

// gsap.from('.stay-in-the-loop-form', {
// scrollTrigger: {
// 	trigger: '.blogs-grid',
// 		// scrub: 1,
// 		start: 'bottom 90%',
// 		end: 'bottom 60%',
// 		toggleActions: 'play none none reverse',
// 		// markers: true,
// 	},
// 	ease: 'power4.inOut',
// 	duration: 1.5,
// 	y: '+60%',
// 	opacity: 0,
// });
// };

const fetchCourses = async () => {
	const axiosInstance = getAxios();
	let url = `${process.env.GATSBY_API_SERVER}/courses/`;
	const response = await axiosInstance.get(url);
	return response.data;
};

const CourseMain = () => {
	ScrollTrigger.defaults({});

	// const { data, isLoading, error } = useQuery(['fetch-courses'], fetchCourses);

	const data = useStaticQuery(graphql`
		query {
			allCourse(sort: { id: DESC }, filter: { is_shop: { eq: true } }) {
				nodes {
					id
					name
					image
					description
					is_shop
					teacher
				}
			}
		}
	`);

	// return <div>{JSON.stringify(data, null, 2)}</div>;

	React.useEffect(() => {
		// animation();
		// gsap.config({ nullTargetWarn: false })
		const tl = gsap.timeline();
		easeIn('.gsap-main-left, .gsap-main-right', {}, tl);

		var images = document.querySelectorAll('.gsap-main-right img');
		for (var j = 0; j < images.length; j++) {
			easeIn(images[j], {}, tl);
		}

		// if (!isLoading) {
		// 	setTimeout(() => {
		const timeline = gsap.timeline();

		if (data.allCourse.nodes) {
			var elements = shuffle(
				document.querySelectorAll(`.courses-grid .gsap-shuffle`)
			);
			elements.forEach((element) =>
				timeline.fromTo(
					element,
					{
						opacity: 0,
						scale: 0,
					},
					{
						delay: 0.05,
						duration: 0.05,
						opacity: 1,
						scale: 1,
					}
				)
			);
		}
		// 	}, 1000);
		// }
	}, [data /*isLoading*/]);

	// if (isLoading) return '加载中Oo.';
	// if (error) return '出错了，无法获得后台请求回应';
	const courses = data.allCourse.nodes;

	// const [firstCourse, ...remainings] = courses;

	return (
		<Frame>
			<div
				style={{
					background:
						'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
				}}
				className='entire-blog pt-12 px-2 md:px-12 pb-24 flex flex-col gap-16 justify-center items-center'
			>
				{/*  */}
				<div className='course-main flex gap-20 max-w-4xl justify-between items-center'>
					<div className='gsap-main-left course-text-block hidden sm:flex xs:gap-2 gap-4  flex-col flex-1'>
						<div>
							<h2 className='xs:text-4xl text-5xl'>课程</h2>
						</div>
						<div>
							<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
								了解最新更新课程，请订阅和关注我们
							</p>
						</div>
						<div>
							<form className='grid grid-cols-[1fr_max-content] grid-rows-1 relative gap-0'>
								<div className='hidden absolute'>
									<input
										type='text'
										tabIndex={-1}
									/>
								</div>
								<input
									className='p-[15px] text-gray-600 font-semibold bg-gray-100 focus:bg-gray-50 duration-300 rounded-l-lg outline-none'
									type='email'
									name='email'
									placeholder='email@framer.com'
								/>
								<div>
									<input
										style={{
											background: 'rgb(116, 33, 252)',
										}}
										value='订阅'
										className='text-white p-[15px] h-full hover:text-gray-300  duration-500 text-sm font-medium outline-none border-none cursor-pointer rounded-r-lg'
										type='submit'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='gsap-main-right hidden md:grid course-image-block flex-1 grid-cols-2'>
						<div className='consulting-hero-image-one border-radius-eighty overflow'>
							<img
								src={good}
								loading='lazy'
								width='322'
								height='426'
								data-w-id='ad912aa4-3553-4162-58d5-b718585ad288'
								alt='Software Solutions'
								className='auto-fit'
							/>
						</div>
						<div className='consulting-hero-image-two'>
							<img
								src={business}
								loading='lazy'
								width='280'
								height='284'
								alt='Business Revenue'
								className='auto-fit'
							/>
						</div>
						<div className='consulting-hero-image-three'>
							<img
								src={formation}
								loading='lazy'
								width='280'
								height='189'
								alt='Formation Status'
								className='auto-fit'
							/>
						</div>
						<div className='consulting-hero-image-four -translate-y-16'>
							<img
								src={esstimated}
								loading='lazy'
								width='280'
								height='310'
								sizes='(max-width: 479px) 90vw, (max-width: 767px) 45vw, (max-width: 991px) 280px, (max-width: 1279px) 22vw, 280px'
								alt='Estimated Processing '
								className='auto-fit'
							/>
						</div>
					</div>
				</div>

				{/*  */}
				<div>
					<div className='courses-grid grid mx-3 min-w-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 auto-rows-min h-min justify-center max-w-[1200px] md:w-full'>
						{courses.map((course: Course, index: number) => {
							return (
								<div
									key={course.id}
									className={`course-${index} gsap-shuffle rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start`}
								>
									<Link to={`/courses/${course.id}`}>
										<div className='xs:h-[224px] h-[334px] overflow-hidden pt-4'>
											<img
												className='w-full h-full object-cover object-center opacity-80 shadow-md rounded-br-[80px]'
												src={course.image}
												alt={course.description}
											/>
										</div>
										<div className='flex flex-col px-8 pb-4 gap-2 relative'>
											<div>
												<p className='text-2xl text-purple-700'>
													{course.name}
												</p>
											</div>
											<div>
												<p
													dangerouslySetInnerHTML={{
														__html: course.description.replace('\\n', '<br/>'),
													}}
												></p>
											</div>
										</div>
										<div className='w-full flex flex-col'>
											<Divider className='w-10/12 self-center' />
										</div>
										<div className='p-4 '>
											<div className='course-card-details-wrapper pb-8'>
												<div className='level-wrapper'>
													<img
														src={level01}
														alt=''
														className='level-icon w-condition-invisible'
													/>
													{/* <img
													src="https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee358b750b2d85_icon-level-02-academy-template.svg"
													alt="" className="level-icon" />
												<img
													src="https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee35be900b2d7a_icon-level-03-academy-template.svg"
													alt="" clasName="level-icon w-condition-invisible" /> */}
													<div className='w-dyn-list'>
														<div
															role='list'
															className='levels-list w-dyn-items'
														>
															<div
																role='listitem'
																className='level-text-wrapper w-dyn-item'
															>
																初学者
															</div>
														</div>
													</div>
												</div>
												<div className='course-card-price'>
													$&nbsp;399.00&nbsp;USD
												</div>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/*  
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
			*/}
		</Frame>
	);
};

export default CourseMain;

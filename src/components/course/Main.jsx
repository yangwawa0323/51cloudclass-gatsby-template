/**
 * Media query is OK.
 *
 * @format
 */

import { Link } from 'gatsby';
import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { debugLog, getAxios } from '../../utils/tools';
import { useQuery } from '@tanstack/react-query';
import Frame from '../frame';

gsap.registerPlugin(ScrollTrigger);

const animation = () => {
	gsap.from('.entire-blog', {
		opacity: 0.6,
		y: '+10%',
		duration: 1.5,
	});

	gsap.from('.stay-in-the-loop-form', {
		scrollTrigger: {
			trigger: '.blogs-grid',
			// scrub: 1,
			start: 'bottom 90%',
			end: 'bottom 60%',
			toggleActions: 'play none none reverse',
			// markers: true,
		},
		ease: 'power4.inOut',
		duration: 1.5,
		y: '+60%',
		opacity: 0,
	});
};

const fetchCourses = async () => {
	const axiosInstance = getAxios();
	let url = `${process.env.GATSBY_API_SERVER}/courses/`;
	const response = await axiosInstance.get(url);
	return response.data;
};

const CourseMain = ({ pageContext }) => {
	React.useEffect(() => {
		animation();
	}, []);

	const { data, isLoading, error } = useQuery(['fetch-courses'], fetchCourses);

	if (isLoading) return '加载中Oo.';
	if (error) return '出错了，无法获得后台请求回应';
	debugLog(data);
	const { courses } = data.result;

	// const [firstCourse, ...remainings] = courses;

	ScrollTrigger.defaults({});

	return (
		<Frame>
			<div
				style={{
					background:
						'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
				}}
				className='min-w-[425px]  entire-blog pt-24 px-12 pb-24 flex flex-col gap-16 justify-center items-center'
			>
				{/*  */}

				<div className=' flex flex-col gap-4 justify-center items-center'>
					<div>
						<h1>课程</h1>
					</div>
					<div>
						<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
							了解最新更新课程，请订阅和关注我们
						</p>
					</div>
					<div>
						<div>
							<form className='grid grid-cols-[1fr_max-content] grid-rows-1 relative gap-0'>
								<div className='hidden absolute'>
									<input
										type='text'
										tabIndex='-1'
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
				</div>

				{/*  */}
				{/* <div className='flex flex-row gap-10 h-min w-full overflow-visible'>
					<div className='flex-grow flex justify-center items-center h-min '>
						<Link
							to={`/courses/`}
							className='rounded-xl shadow-lg overflow-hidden relative'
						>
							<div className='w-full'>
								<div>
									<img
										className='object-cover object-right-top  min-h-[480px] min-w-[800px]  w-full h-full rounded-[inherit]'
										src={firstCourse.image}
										alt={firstCourse.title}
									/>
								</div>
								<div className='absolute p-8 bottom-7 text-gray-300 hover:text-gray-400 duration-500'>
									<p>{firstCourse.type}</p>
									<h4 className='text-gray-300'>{firstCourse.name}</h4>
									<p>{firstCourse.description}</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='flex flex-col  justify-start gap-4 h-full'>
						<div>
							<h4>最新课程</h4>
						</div>
						<div className='flex flex-col gap-4 justify-start w-full'>
							{remainings.map((course) => (
								<div className='rounded-lg hover:shadow-xl duration-500 shadow-md overflow-hidden flex flex-row gap'>
									<Link
										to={`/courses/`}
										className='flex flex-row max-w-[400px] h-14 justify-center items-center'
									>
										<div className='flex-[0.8]'>
											<img
												src={course.image}
												alt={course.name}
											/>
										</div>
										<div className='flex-1 p-4'>
											<h6>{course.name}</h6>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div> */}

				{/*  */}
				<div>
					<div className='blogs-grid grid xs:grid-cols-1 md:grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(2,min-content)] gap-8 auto-rows-min h-min justify-center max-w-[1200px] w-full'>
						{courses.map((course) => (
							<div
								key={course.ID}
								className='rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'
							>
								<Link to={`/courses/${course.ID}`}>
									<div className='xs:h-[224px] h-[334px] overflow-hidden'>
										<img
											className='w-full h-full object-cover'
											src={course.image}
											alt={course.title}
										/>
									</div>
									<div className='flex flex-col p-8 gap-2'>
										<div>
											<p className='uppercase font-extrabold text-purple-700 text-sm'>
												{course.type}
											</p>
										</div>
										<div>
											<h4>{course.title}</h4>
										</div>
										<div>
											<p>{course.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			{/*  */}
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
		</Frame>
	);
};

export default CourseMain;

/**
 * Media query is OK.
 *
 * @format
 */

import { Link, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import gsap from 'gsap';
import Frame from '../components/frame';
import '../styles/pages/_course-main.scss';
import { Chip /* Divider */ } from '@mui/material';

/* tslint:disable */
import { utils } from '../utilities';
import good from '../assets/img/courses/good.png';
import business from '../assets/img/courses/business-revenue.png';
import formation from '../assets/img/courses/formaṭion-status.png';
import esstimated from '../assets/img/courses/esstimated-processing.png';
/* tslint:enable  */
import { easeIn } from '../utils/animate';
import { Course } from '../components';
import SEO from '../components/seo';
import { FcLinux } from 'react-icons/fc';
import { TbDatabaseDollar } from 'react-icons/tb';
import { SiJamstack } from 'react-icons/si';
import { MdOutlineSignalCellularAlt2Bar } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { IconContext } from 'react-icons';

const { getAxios } = utils;

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

/* const fetchCourses = async () => {
	const axiosInstance = getAxios();
	let url = `${process.env.GATSBY_API_SERVER}/courses/`;
	const response = await axiosInstance.get(url);
	return response.data;
} */

const CourseMain = () => {
	// const { data, isLoading, error } = useQuery(['fetch-courses'], fetchCourses);

	const isotope = React.useRef();
	const [filterKey, setFilterKey] = React.useState('*');

	const data = useStaticQuery(graphql`
		query {
			allCourse(sort: { grade: ASC }, filter: { is_shop: { eq: true } }) {
				nodes {
					id
					name
					image
					description
					is_shop
					grade
					teacher
					last_updated_at
					category_id
				}
			}
		}
	`);

	const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

	const lastUpdated = React.useCallback((dateStr: string) => {
		// debugLog('date string:', dateStr);
		var now = new Date().getTime();
		var updatedAt = new Date(dateStr).getTime();
		// debugLog(updatedAt, now, (now - updatedAt) / (24 * 3600 * 1000) < 1);
		return (now - updatedAt) / (24 * 3600 * 1000) < 1;
	}, []);

	// return <div>{JSON.stringify(data, null, 2)}</div>;

	React.useEffect(() => {
		const Isotope =
			typeof window !== undefined ? require('isotope-layout') : null;
		isotope.current = new Isotope('.courses-grid', {
			itemSelector: '.course-item',
			layoutMode: 'fitRows',
			masonry: {
				columnWidth: 260,
				fitWidth: true,
			},
		});
		return () => isotope.current.destroy();
	}, []);

	React.useEffect(() => {
		filterKey === '*'
			? isotope.current.arrange({ filter: '*' })
			: isotope.current.arrange({ filter: `${filterKey}` });
	}, [filterKey]);

	const courseGrade = React.useCallback((grade) => {
		switch (grade) {
			case 3:
				return ['较难', <FaSignal />];
			case 2:
				return ['中等', <MdOutlineSignalCellularAlt />];
			default:
				return ['容易', <MdOutlineSignalCellularAlt2Bar />];
		}
	});

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
		/* 	setTimeout(() => {
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
		}, 1000); */
		// }
	}, [data]);

	const courses = data.allCourse.nodes;

	return (
		<Frame>
			<div
				style={{
					background:
						'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
				}}
				className='entire-blog md:pt-12 px-2 md:px-12 flex flex-col justify-center items-center'
			>
				{/*  */}
				<div className='course-main flex mt-8 gap-20 max-w-4xl justify-between items-center'>
					<div className='gsap-main-left course-text-block hidden sm:flex xs:gap-2 gap-4  flex-col flex-1'>
						<div>
							<h2 className='text-3xl md:text-5xl'>课程</h2>
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
				<div className='w-full mt-8'>
					<IconContext.Provider value={{ color: 'purple' }}>
						<div className='flex flex-wrap gap-2 mb-4 space-x-4 place-content-center'>
							<Chip
								label='全部课程'
								onClick={() => {
									setFilterKey('*');
								}}
								className='group px-6 cursor-pointer hover:bg-gray-300 hover:text-white transition-all duration-500'
								color='warning'
								icon={<TbDatabaseDollar />}
							/>
							<Chip
								label='入门课程'
								onClick={() => {
									setFilterKey('.grade-1');
								}}
								className='group px-6 cursor-pointer hover:bg-purple-500 hover:text-white transition-all duration-500'
								icon={<MdOutlineSignalCellularAlt2Bar />}
							/>
							<Chip
								label='进阶课程'
								onClick={() => {
									setFilterKey('.grade-2');
								}}
								className='group px-6 cursor-pointer hover:bg-purple-500 hover:text-white transition-all duration-500'
								icon={<MdOutlineSignalCellularAlt />}
							/>
							<Chip
								label='高阶课程'
								onClick={() => {
									setFilterKey('.grade-3');
								}}
								className='group px-6 cursor-pointer hover:bg-purple-500 hover:text-white transition-all duration-500'
								icon={<FaSignal />}
							/>
							<Chip
								label='运维工程师'
								onClick={() => {
									setFilterKey('.category-1');
								}}
								color='primary'
								className='group px-6 cursor-pointer hover:bg-gray-300 hover:text-white transition-all duration-500'
								icon={<FcLinux className='text-lg' />}
							/>

							<Chip
								onClick={() => {
									setFilterKey('.category-4, .category-3');
								}}
								className='group px-6 cursor-pointer hover:bg-gray-300 hover:text-white transition-all duration-500'
								label='全栈开发工程师'
								color='primary'
								icon={<SiJamstack />}
							/>
						</div>

						{/* <div className='courses-grid grid mx-3 min-w-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 auto-rows-min h-min justify-center max-w-[1200px] md:w-full'> */}
						<div className='courses-grid mx-10 gap-8 flex flex-auto flex-row place-items-center place-content-center max-w-[1200px] md:w-full'>
							{courses.map((course: Course, index: number) => {
								return (
									<div
										key={course.id}
										className={`course-${index} grade-${course.grade} category-${course.category_id} course-item 
									w-64 max-h-96 bg-white !ml-4 !mb-4 transition-all duration-1000
									gsap-shuffle rounded-2xl overflow-hidden border-[2px] shadow-md hover:scale-105 hover:z-10 `}
									>
										<Link to={`/courses/${course.id}`}>
											<div className='w-full h-fit overflow-hidden pt-4'>
												{lastUpdated(course.last_updated_at) && (
													<div className='absolute bg-orange-600 rotate-[30deg] min-w-52  p-2 text-center text-white top-1/5 -right-8 z-10'>
														今日有更新
													</div>
												)}
												<img
													className='w-full h-40 object-cover object-center opacity-80 shadow-md rounded-br-[80px]'
													src={course.image}
													alt={course.description}
												/>
											</div>
											<div className='flex flex-col h-20 px-8 py-4 gap-2 relative'>
												<div>
													<p className='text-base text-purple-700'>
														{course.name}
													</p>
												</div>
											</div>

											<div className='p-4 '>
												<div className='course-card-details-wrapper pb-2'>
													<div className='level-wrapper'>
														{courseGrade(course.grade)[1]}

														<div className='level-text-wrapper text-xs'>
															{courseGrade(course.grade)[0]}
														</div>
													</div>
													<div className='text-xs text-purple-600'>
														全网 ￥51 包月学习
													</div>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</IconContext.Provider>
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

export const Head = () => <SEO />;

/* export const FilterChip = ({
	icon,
	label,
	onClick,
	color = 'primary',
	variant = 'filled',
}) => {
	return (
		<Chip
			onClick={onClick}
			variant={variant}
			label={label}
			color={color}
			className='group px-6 cursor-pointer hover:bg-gray-300 hover:text-white transition-all duration-500'
			icon={icon}
		/>
	);
} */

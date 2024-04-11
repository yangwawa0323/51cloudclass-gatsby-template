import React from 'react';

import { useCallback } from 'react';
import { Link } from 'gatsby';

import gsap from 'gsap';
import { Button, styled, useMediaQuery, useTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useQuery } from '@tanstack/react-query';
import { getAxios } from '../../utilities/utils';
import { decryptJWE2JSON } from '../../utils/jwe-decrypt';
import { useEffect } from 'react';
import { useState } from 'react';

const Courses = () => {
	const [demoCourses, setDemoCourses] = useState([]);
	const tl = gsap.timeline();

	const theme = useTheme();
	const geMedium = useMediaQuery(theme.breakpoints.up('md'));
	const geLarge = useMediaQuery(theme.breakpoints.up('lg'));

	const fetchCourses = async () => {
		const axiosInstance = getAxios();
		let url = `${process.env.GATSBY_API_SERVER}/courses/`;
		return await axiosInstance
			.get(url)
			.then((response) => decryptJWE2JSON(response.data.result.encrypted));
	};

	const { data, isLoading } = useQuery({
		queryKey: ['index-courses'],
		queryFn: fetchCourses,
	});

	useEffect(() => {
		if (data) {
			const { result } = data;
			// debugLog(`geLarge: ${geLarge} , geMedium : ${geMedium} `);
			setDemoCourses(() =>
				geLarge
					? result.courses.slice(0, 8)
					: geMedium
					? result.courses.slice(0, 9)
					: result.courses.slice(0, 6)
			);
		}
	}, [data, geLarge, geMedium]);

	const animation = () => {
		let cards = gsap.utils.toArray('.course-card');

		cards.reverse().forEach((card, index) => {
			let tweens = gsap.fromTo(
				card,
				{
					opacity: 0,
					x: index % 2 === 0 ? 400 : -400,
					y: 400,
				},
				{
					opacity: 1,
					x: 0,
					y: 0,
					duration: 0.5,
					delay: 0.5,
					scrollTrigger: {
						trigger: `.entire-blog`,
						// markers: true,
						start: geLarge ? `top ${index * 60}px` : `top+60px ${index * 60}px`,
						end: `bottom top`,
						// ease: '',
					},
				}
			);
			tl.add(tweens);
		});
	};

	useEffect(() => {
		animation();
	}, [demoCourses, geLarge, geMedium]);

	// const courses = data.allCourse.nodes;

	const offlined = useCallback((course) => {
		return !course.is_shop;
	}, []);

	return (
		<div
			style={{
				background: 'linear-gradient(0deg,#f6f4ff 0%,#fff 100%)',
			}}
			className='entire-blog'
		>
			<div className='min-w-[360px] mx-8 px-2 py-12 flex flex-col items-center'>
				{/* <div className='course-main max-w-[680px]'> */}
				<div className='w-3/5 flex flex-col gap-8 mb-12 justify-center items-center'>
					<div className='gsap-title'>
						<h2>精品课程</h2>
					</div>
					<div>
						<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
							我们的课程包含着两条主职业发展路线，其一目的为运维岗位，目的在培养高级大数据云平台运维工程师，另外一个为全栈开发，主攻Linux下服务端和前端一站式开发。后者即需要Linux功底，同时需要多层次的知识。
						</p>
					</div>
				</div>
				{/* </div> */}
				<div className='pb-12 see-all-courses'>
					<ColorButton>
						<Link to='/courses'>查看全部课程</Link>
					</ColorButton>
				</div>
				<div className='hidden course-grid sm:grid xs:grid-cols-1 md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:grid-cols-4 xs:gap-2  gap-8 auto-rows-min h-min justify-evenly w-full'>
					{demoCourses?.map((course, index) => {
						return (
							<div
								key={index}
								className={`course-card course-card-${index} cursor-pointer rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start`}
							>
								<Link to={`/courses/`}>
									<div className='max-[425px]:h-[80px] h-[180px]'>
										<img
											style={{
												filter: offlined(course) ? 'grayscale(100%)' : 'unset',
											}}
											className='w-full h-full object-fill object-center opacity-80 shadow-md rounded-br-[80px]'
											src={course.image}
											alt={course.name}
										/>
									</div>
									<div className='flex flex-col p-8 gap-2'>
										<div>
											<p className='uppercase font-bold text-purple-700'>
												{course.name} {offlined(course) ? '-- 即将上线' : ''}
											</p>
										</div>
										{/* <div>
											<p className='text-gray-600'>{course.description}</p>
										</div> */}
									</div>
								</Link>
							</div>
						);
					})}
				</div>
				<div className='hidden sm:block pt-12'>
					<ColorButton>
						<Link to='/courses'>查看全部课程</Link>
					</ColorButton>
				</div>
			</div>
		</div>
	);
};

export default Courses;

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: purple[500],
	padding: '12px 30px',
	fontWeight: 600,
	'&:hover': {
		backgroundColor: purple[700],
	},
}));

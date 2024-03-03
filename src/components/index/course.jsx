import React from 'react';

import { useCallback } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { debugLog } from '51cloudclass-utilities/src/utils';
import { Button, styled } from '@mui/material';
import { purple } from '@mui/material/colors';

const Courses = () => {
	const tl = gsap.timeline();

	useGSAP(() => {
		let cards = gsap.utils.toArray('.course-card');

		let tween = gsap.fromTo(
			cards[0],
			{
				opacity: 0,
				x: -800,
				y: 400,
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				scrollTrigger: {
					trigger: `.gsap-title`,
					scrub: true,
					start: `top 80%`,
					end: `top center`,
					// toggleActions: 'restart pause reverse pause',
					ease: 'none',
				},
			}
		);
		tl.add(tween);

		cards
			.filter((_, index) => {
				return index !== 0;
			})
			.forEach((card, index) => {
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
						scrollTrigger: {
							trigger: `.course-card-${index}`,
							// trigger: `.course-card-0`,
							// markers: true,
							scrub: true,
							start: `top 80%`,
							end: `bottom bottom`,
							ease: 'none',
						},
					}
				);
				tl.add(tweens);
			});
	});

	const data = useStaticQuery(graphql`
		query {
			allCourse(
				limit: 6
				sort: { UpdatedAt: DESC }
				filter: { is_shop: { eq: true } }
			) {
				nodes {
					id
					name
					image
					description
					is_shop
				}
			}
		}
	`);

	const courses = data.allCourse.nodes;

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
				<div className='pb-12'>
					<ColorButton>
						<Link to='/courses'>查看全部课程</Link>
					</ColorButton>
				</div>
				<div className='course-grid grid xs:grid-cols-1 md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:grid-cols-4 xs:gap-2  gap-8 auto-rows-min h-min justify-evenly w-full'>
					{courses.map((course, index) => {
						return (
							<div
								key={course.id}
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
				<div className='pt-12'>
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

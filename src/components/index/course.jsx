import React from 'react';

import { useCallback } from 'react';
import { utils } from '51cloudclass-utilities/dist';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { easeIn } from '../../utils/animate';
import gsap from 'gsap';
import { Container } from '@mui/material';

const { getAxios } = utils;

const Courses = () => {
	React.useEffect(() => {
		const tl = gsap.timeline();
		easeIn('.gsap-course-main-title', {}, tl);
		easeIn('.course-grid', {}, tl);
	}, []);

	// const axiosInstance = getAxios();
	// const fetchCourses = async () => {
	// 	const response = await axiosInstance.get(
	// 		`${process.env.GATSBY_API_SERVER}/courses/`
	// 	);
	// 	return response.data;
	// };

	const data = useStaticQuery(graphql`
		query {
			allCourse(
				limit: 12
				sort: { id: DESC }
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
					<div>
						<h2>精品课程</h2>
					</div>
					<div>
						<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
							我们的课程包含着两条主职业发展路线，其一目的为运维岗位，目的在培养高级大数据云平台运维工程师，另外一个为全栈开发，主攻Linux下服务端和前端一站式开发。后者即需要Linux功底，同时需要多层次的知识。
						</p>
					</div>
				</div>
				{/* </div> */}
				<div className='course-grid grid xs:grid-cols-1 md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-3 xs:gap-2  gap-8 auto-rows-min h-min justify-center w-full'>
					{courses.map((course) => {
						return (
							<div
								key={course.id}
								className='cursor-pointer rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'
							>
								<Link to={`/courses/`}>
									<div className='max-[425px]:h-[120px] h-[334px]'>
										<img
											style={{
												filter: offlined(course) ? 'grayscale(100%)' : 'unset',
											}}
											className='w-full h-full object-cover object-center opacity-80 shadow-md rounded-br-[80px]'
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
										<div>
											<p className='text-gray-600'>{course.description}</p>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Courses;

/** @format */

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { useCallback } from 'react';
import { getAxios } from '../../utils/tools';
import { Link } from 'gatsby';

const Courses = () => {
	const axiosInstance = getAxios();
	const fetchCourses = async () => {
		const response = await axiosInstance.get(
			`${process.env.GATSBY_API_SERVER}/courses/`
		);
		return response.data;
	};

	const offlined = useCallback((course) => {
		return !course.is_shop;
	}, []);

	const { data, isLoading, error } = useQuery(['fetch-courses'], fetchCourses);

	if (isLoading) {
		return <div>加载中...</div>;
	}
	if (error) return '出错了，无法获得后台请求回应';

	return (
		<div
			style={{
				background:
					'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
			}}
			className='entire-blog pt-24 px-12 pb-24 flex flex-col gap-16 justify-center items-center'
		>
			<div className='course-main max-w-[680px] flex flex-col gap-4 justify-center items-center'>
				<div className='course-text-block'>
					<div>
						<h2>精品课程</h2>
					</div>
					<div>
						<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
							我们的课程包含着两条主职业发展路线，其一目的为运维岗位，目的在培养高级大数据云平台运维工程师，另外一个为全栈开发，主攻Linux下服务端和前端一站式开发。后者即需要Linux功底，同时需要多层次的知识。
						</p>
					</div>
				</div>

			</div>
			<div className='blogs-grid grid xs:grid-cols-1 md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-3 xs:gap-2  gap-8 auto-rows-min h-min justify-center  w-full'>
				{data.result.courses.map((course) => {
					return (
						<div
							key={course.ID}
							className='cursor-pointer rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'
						>
							<Link to={`/courses/`}>
								<div className='max-[425px]:h-[120px] h-[334px] overflow-hidden'>
									<img
										style={{
											filter: offlined(course) ? 'grayscale(100%)' : 'unset',
										}}
										className='w-full h-full object-cover'
										src={course.image}
										alt={course.name}
									/>
								</div>
								<div className='flex flex-col p-8 gap-2'>
									<div>
										<p className='uppercase font-extrabold text-purple-700 text-sm'>
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
	);
};

export default Courses;

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
			className='min-w-[425px]  entire-blog pt-24 px-12 pb-24 flex flex-col gap-16 justify-center items-center'
		>
			<div className=' max-w-[680px] flex flex-col gap-4 justify-center items-center'>
				<div>
					<h2>精品课程</h2>
				</div>
				<div>
					<p className='text-center font-medium text-[24px] text-gray-600 break-words'>
						我们的课程包含着两条主职业发展路线，其一目的为运维岗位，目的在培养高级大数据云平台运维工程师，另外一个为全栈开发，主攻Linux下服务端和前端一站式开发。后者即需要Linux功底，同时需要多层次的知识。
					</p>
				</div>
				{/* <div>
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
								value='subscribe'
								className='text-white p-[15px] h-full hover:text-gray-300  duration-500 text-sm font-medium outline-none border-none cursor-pointer rounded-r-lg'
								type='submit'
							/>
						</div>
					</form>
				</div> */}
			</div>
			<div className='blogs-grid grid  xs:grid-cols-[repeat(1,minmax(200px,1fr))] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-3  gap-8 auto-rows-min h-min justify-center max-w-[1200px] w-full'>
				{data.result.courses.map((course) => {
					return (
						<div
							key={course.ID}
							className='cursor-pointer rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'
						>
							<Link to={`/courses/`}>
								<div className='h-[334px] overflow-hidden'>
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

/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import FourKLogo from '../../assets/img/4k-logo-svgrepo-com.svg';
import Css3Logo from '../../assets/img/css3-logo-svgrepo-com.svg';
import GitLogo from '../../assets/img/git-logo-svgrepo-com.svg';
import LinuxLogo from '../../assets/img/logo-tux-svgrepo-com.svg';
import GoLangLogo from '../../assets/img/go-logo-svgrepo-com.svg';
import SinaLogo from '../../assets/img/sina-logo-svgrepo-com.svg';

import sophie from '../../assets/img/courses/sophie-moore.jpg';
import marketers from '../../assets/img/courses/marketers.png';

import { Link } from 'gatsby';
import '../../styles/pages/_course-boost.scss';

import gsap from 'gsap';
import { easeIn } from '../../utils/animate';
import { Chapter, Course } from '..';

interface BoostSectionProps {
	course: Course;
}

const BoostSection = ({ course }: BoostSectionProps) => {
	React.useEffect(() => {
		const tl = gsap.timeline();
		easeIn('.gsap-about-course', {}, tl);
		easeIn('.gsap-course-preview', {}, tl);
	}, []);

	return (
		<div
			className='w-full landing4-boost-section  xs:px-4  p-4 justify-center items-center flex flex-col gap-24 h-min relative'
			style={{
				background:
					'radial-gradient(72.6% 84% at 100% 100%, #b09eff 0%, rgb(255, 255, 255)  100%)',
			}}
		>
			{/*  */}
			<div className='section course wf-section'>
				<div className='container-default-1209px  w-container'>
					<div className='flex flex-col md:flex-row-reverse justify-center '>
						<div className='gsap-about-course about-course '>
							<div className='top-content course'>
								<h2 className='title course-page xs:text-5xl'>
									{course?.name}
								</h2>
								<p className='paragraph course-description text-xl leading-10'>
									{course?.description}
								</p>
								<div className='w-layout-grid advantage-course-grid'>
									<div className='advantage-course-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3544500b2dbf_icon-advantage-course-01-academy-template.svg'
											alt=''
											className='advantage-course-icon'
										/>
										<div className='advantage-course-text'>在线视频</div>
									</div>
									<div className='advantage-course-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3582430b2dc9_icon-advantage-course-02-academy-template.svg'
											alt=''
											className='advantage-course-icon'
										/>
										<div className='advantage-course-text'>练习资源</div>
									</div>
									<div className='advantage-course-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3531700b2dc0_icon-advantage-course-03-academy-template.svg'
											alt=''
											className='advantage-course-icon'
										/>
										<div className='advantage-course-text'>电子文档</div>
									</div>
									<div className='advantage-course-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3538530b2db7_icon-advantage-course-04-academy-template.svg'
											alt=''
											className='advantage-course-icon'
										/>
										<div className='advantage-course-text'>学习团队</div>
									</div>
								</div>
								<a
									href='/teacher/sophie-moore'
									className='course-teacher-wrapper w-inline-block'
								>
									<img
										src={sophie}
										alt=''
										className='image course-teacher'
									/>
									<div>
										<div className='course-teacher-name'>Sophie Moore</div>
										<div className='teacher-work _2'>UI/UX Designer</div>
									</div>
								</a>
								<div className='spacer about-course'></div>
								<div className='flex-1 ml-0 md:ml-[2rem] justify-start p-8 bg-white flex flex-col gap-3 h-min rounded-xl shadow-2xl'>
									<h5 className='text-purple-700'>[ 课程章节 ]</h5>
									{/* course chapter list */}
									{course.chapters
										?.sort(
											(a: Chapter, b: Chapter) => a.order_index - b.order_index
										)
										.map((chpt: Chapter, idx: number) => {
											return (
												<div
													key={idx}
													className='text-ellipsis truncate'
												>
													<Link to={`/chapters/${chpt.id}`}>
														<span>第{chpt.order_index + 1}章：</span>
														{chpt.name}
													</Link>
												</div>
											);
										})}
								</div>
							</div>
							<div className='spacer about-course'></div>
						</div>
						<div className='spacer course'></div>
						<div className='hidden md:block gsap-course-preview relative'>
							<div className='card course'>
								<div className='course-preview'>
									<img
										src={marketers}
										alt=''
										className='image course-page'
									/>
									<div className='course-preview-wrapper'>
										<Link
											to='/courses'
											className='course-preview-button w-inline-block w-lightbox'
										>
											<div className='button-play-wrapper'>
												<img
													src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee35cf400b2dcf_icon-play-academy-template.svg'
													alt=''
													className='button-play course'
												/>
											</div>
										</Link>
									</div>
								</div>
								<div>
									<button className='button-primary large w-full'>
										加入学习计划
									</button>
								</div>
								<div className='course-details mt-8'>
									<div className='course-detail-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3569bf0b2d7f_icon-level-01-academy-template.svg'
											alt=''
											className='course-detail-icon standard-size'
										/>

										<div className='course-detail-text'>难度:&nbsp;</div>
										<div className='level-wrapper'>
											<div className='w-dyn-list'>
												<div
													role='list'
													className='levels-list w-dyn-items'
												>
													<div
														role='listitem'
														className='level-text-wrapper w-dyn-item'
													>
														<a
															href='/category/beginner'
															className='course-detail-text level'
														>
															初级
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='spacer course-details'></div>
									<div className='course-detail-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3501350b2d88_icon-event-02-academy-template.svg'
											alt=''
											className='course-detail-icon standard-size'
										/>
										<div className='course-detail-text'>时长:&nbsp;</div>
										<div className='course-detail-text strong'>
											5小时 42分钟
										</div>
									</div>
									<div className='spacer course-details'></div>
									<div className='course-detail-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee3573f40b2d79_icon-course-detail-01-academy-template.svg'
											alt=''
											className='course-detail-icon'
										/>
										<div className='course-detail-text'>视频:&nbsp;</div>
										<div className='course-detail-text strong'>67</div>
									</div>
									<div className='spacer course-details'></div>
									<div className='course-detail-wrapper'>
										<img
											src='https://assets.website-files.com/60e48aaaeeee3511650b2d24/60e48aaaeeee35e7fa0b2dbe_icon-course-detail-02-academy-template.svg'
											alt=''
											className='course-detail-icon'
										/>
										<div className='course-detail-text'>实验资源:&nbsp;</div>
										<div className='course-detail-text strong'>8</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-12 w-4/5'>
				<div>
					<p className='text-[14px] text-gray-400'>采用先进的字节流视频技术</p>
				</div>
				<div className='flex flex-row  gap-6  justify-around'>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={FourKLogo}
						/>
					</div>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={LinuxLogo}
						/>
					</div>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={Css3Logo}
						/>
					</div>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={GoLangLogo}
						/>
					</div>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={GitLogo}
						/>
					</div>
					<div>
						<img
							alt=''
							style={{
								fill: 'rgb(163, 161, 184)',
								stroke: 'rgb(163, 161, 184)',
								imageRendering: 'pixelated',
							}}
							className='h-12 w-12 object-cover opacity-60 hover:opacity-80'
							src={SinaLogo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoostSection;

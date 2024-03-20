/**
 * Media query is OK.
 *
 * @format
 */

import gsap from 'gsap';
import React from 'react';
import VPN from '../assets/img/VPNaNlpAPRXTqrOXAT44QsmNMxE.webp';
import Frame from '../components/frame';
import { easeIn } from '../utils/animate';

const ChangeLog = () => {
	React.useEffect(() => {
		var tl = gsap.timeline();
		easeIn('.gsap-title', {}, tl);
		easeIn('.gsap-history', { duration: 0.5, delay: 0.5 }, tl);
	}, []);
	return (
		<Frame>
			<div
				className='flex flex-col  justify-center items-center w-full min-h-full'
				style={{
					background:
						'linear-gradient(0deg, #f6f4ff 0%, hsl(0, 0%, 100%) 100%)',
				}}
			>
				{/*  Change log  */}
				<div className='gsap-title max-w-[500px] flex flex-col gap-5 justify-center items-center h-min xs:pt-8 pt-48 pb-24'>
					<div>
						<h1 className='font-extrabold tracking-tighter xs:text-[48px] text-[68px]'>
							网站开发之旅
						</h1>
					</div>
					<div>
						<p className='text-gray-600 xs:px-4 text-xl text-center font-medium'>
							网站分为前端美工，前端组件设计，后台API接口，后台逻辑，后台数据库五大部分。
						</p>
					</div>
				</div>
			</div>

			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden xs:p-8 p-24 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2023-01-29</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'> 伪数据设计</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									在前后端分离开发工程中，经常因为后台数据库的一个表结构不成熟设计的修改，而造成连带性质的后台逻辑，
									后台API,前端组件的修改。而采用先用伪数据打造整站，最后确稿后集中后台开发的思路打破常规团队开发原型设计由上而下的模式。
									节省前后端衔接争议性的时间。
								</p>
							</div>
						</div>
						<div className='aspect-auto border-0 h-[535px] w-[700px]'>
							<div>
								<div>
									<img
										className='object-cover object-center rounded-3xl'
										style={{ aspectRatio: '1.30841 / 1' }}
										src={VPN}
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2023-01-31</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'>用户登录</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									用户通过由JSON-server提供的伪数据登录,同时点击用户头像弹出用户信息的菜单界面
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2023-03-18</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'>SSR页面</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									通过服务端渲染页面，提前生成静态化页面，方便通过技术手段缓存用户浏览过的页面，以及便于搜索引擎爬虫工具收录。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-center h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2023-04-11</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div className='flex gap-2 items-center flex-row-reverse justify-end'>
								<h3 className='text-xl font-extrabold'>用户头像定制</h3>
								<p>
									<img
										className='w-48 h-48'
										alt='default'
										src='https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=AngryNatural&hairColor=Auburn&mouthType=Eating&skinColor=Brown&topType=ShortHairDreads02'
									/>
								</p>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									为了防止涉黄涉广告涉非的用户头像图片上传，污染了学习平台，我们决定使用用户卡通SVG自定义头像
									，并提交和编写该功能。
									目前该功能存在一个与React18兼容的小Bug。就是在每次刷新页面的第一次更换头像时控制台会有React18的警告提示信息。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2023-04-28</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'>全面转为Typescript</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									为了更好的结合课程的需求以及开发的Vscode编程的便捷，全面将React
									JSX 转为 TSX，切换到 Typescript, 省去Proptypes的定义编写。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2024-02-10</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'>课程录制到663节</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									首先给大家拜个晚年，课程至今已经录制到663节了，距离1500+节还差一半多一点，好在是课程是从难的内容往基础课程录制的。因为基础课都做好了PPT后期进度会更快一些。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='gsap-history justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
				<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
					<div className='flex flex-col justify-start w-auto'>
						<h3 className='text-xl font-extrabold text-gray-500'>2024-02-10</h3>
					</div>
					<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
						<div className='flex flex-col gap-5'>
							<div>
								<h3 className='text-xl font-extrabold'>用户控制面板</h3>
							</div>
							<div>
								<p className='text-lg font-medium text-gray-600'>
									过年炮竹响震天，红红火火过大年，因为环境音原因遂而开发一个用户控制面板。后期添加
									golang 后台数据处理。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Frame>
	);
};

export default ChangeLog;

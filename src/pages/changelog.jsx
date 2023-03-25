/**
 * Media query is OK.
 *
 * @format
 */

import React from 'react';
import VPN from '../assets/img/VPNaNlpAPRXTqrOXAT44QsmNMxE.webp';
import Frame from '../components/frame';

const ChangeLog = () => {
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
				<div className='max-w-[500px] flex flex-col gap-5 justify-center items-center h-min pt-48 pb-24'>
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

			<div className='justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden xs:p-8 p-24 w-full content-center items-center'>
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
			<div className='justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
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
			<div className='justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-8 w-full content-center items-center'>
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
		</Frame>
	);
};

export default ChangeLog;

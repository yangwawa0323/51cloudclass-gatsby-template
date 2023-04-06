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

import { navigate } from 'gatsby';
import { getAxios, keepUserInfo } from '../../utils/tools';
import { useDispatch } from 'react-redux';
import { setAccount } from '../../store/account/accountSlice';

const BoostSection = () => {
	const initialForm = {
		account: '',
		password: '',
	};

	const [formData, setFormData] = React.useState(initialForm);

	const dispatch = useDispatch();

	const postFormData = async () => {
		const axiosInstance = getAxios();
		const response = await axiosInstance.post(
			`${process.env.GATSBY_API_SERVER}/users/`,
			formData
		);
		const data = await response.data;
		if (data.length) {
			dispatch(setAccount(data[0]));
			keepUserInfo(data[0]);
			navigate('/');
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		postFormData();
		setFormData(initialForm);
	};

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div
			className='min-w-[425px] landing4-boost-section pt-48 px-24 pb-24 justify-center items-center flex flex-col gap-24 h-min overflow-hidden relative'
			style={{
				background:
					'radial-gradient(72.6% 84% at 100% 100%, #b09eff 0%, rgb(255, 255, 255)  100%)',
			}}
		>
			<div
				className='flex flex-col md:flex-row gap-20 max-w-[1200px]
			 h-min items-center justify-center '
			>
				<div className='flex-1 max-w-[600px] gap-4 flex flex-col justify-start'>
					<div>
						<p className='text-purple-700 font-extrabold uppercase'>
							云课堂视频教学
						</p>
					</div>
					<div>
						<h2 className='max-w-[400px] whitespace-pre-wrap break-words'>
							提升你的职业技能
						</h2>
					</div>
					<div>
						<p className='break-words text-6 font-medium text-gray-700'>
							系统的学习互联网运维知识，掌握职场就业新风向，充电学习，知识积累和沉淀，快快登录开启线上学习之旅吧！
						</p>
					</div>
				</div>
				<div className='flex-1 justify-start w-4/5 p-8 bg-white flex flex-col gap-6 h-min rounded-xl shadow-2xl'>
					<div>
						<h4>51元包月学习</h4>
					</div>
					<div>
						<div>
							<form
								method='POST'
								action='#'
								className='flex flex-col gap-4'
								onSubmit={handleFormSubmit}
							>
								<div className='w-full grid gap-4'>
									<input
										onChange={handleInputChange}
										value={formData.account}
										name='account'
										placeholder='邮箱/用户名/手机号'
										style={{
											boxShadow: 'transparent 0px 0px 0px 1px inset',
										}}
										className='w-full outline-none
									p-4 rounded-lg font-medium bg-gray-200 text-gray-900
									'
									/>
									<input
										onChange={handleInputChange}
										value={formData.password}
										placeholder='密码'
										name='password'
										type='password'
										className='w-full outline-none
									p-4 rounded-lg font-medium bg-gray-200 text-gray-900
									'
									/>
								</div>
								<div>
									<input
										type='submit'
										className='bg-purple-700 hover:bg-purple-600 transition-all duration-1000 rounded-lg w-full p-4 text-white font-medium'
										value='芝麻开门'
									/>
								</div>
							</form>
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
/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import { Link } from 'gatsby';

const Footer = (props) => {
	const { extraStyles } = props;
	return (
		<div className='w-full min-w-[768px] h-auto relative flex flex-auto pointer-events-none'>
			<div className='contents'>
				<footer
					className='pointer-events-auto items-center gap-[100px] h-min px-24 py-8 place-content-center flex-col w-full text-gray-300 text-xs'
					style={{ backgroundColor: 'rgb(79, 25, 166)' }}
				>
					<div
						className='gap-10 flex flex-col max-w-[1200px]'
						style={{
							extraStyles,
						}}
					>
						<div>
							<a href='#footer'>
								<div>
									<h1 className='text-white text-base'>51cloudclass 云课堂</h1>
								</div>
							</a>
						</div>
						<div className='w-full flex justify-around gap-10'>
							<div className='flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]'>
								<div>
									<p className='font-bold text-white'>首页</p>
								</div>
								<div>
									<p>
										<Link to='/'>首页</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/'>模板页面</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/styleguide'>样式</Link>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]'>
								<div>
									<p className='font-bold text-white'>页面</p>
								</div>
								<div>
									<p>
										<Link to='/#pages'>所有页面</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/landing1'>登录页面</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/about-1'>关于我们</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/contact-1'>联系人</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/blog-1'>Blog</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/features-1'>特性</Link>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-1.5 flex-1 h-min overflow-hidden min-w-[200px]'>
								<div>
									<p className='font-bold text-white'>模板</p>
								</div>
								<div>
									<p>
										<Link to='/changelog'>修改记录</Link>
									</p>
								</div>
								<div>
									<p>
										<Link to='/styleguide'>样式指南</Link>
									</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<p className='text-[11px]'>
									<a href='https://www.51cloudclass.com/'>
										© 版权隶属于 <strong>51cloudclass</strong> 云课堂科技
									</a>
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;

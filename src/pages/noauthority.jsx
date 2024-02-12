/**
 * Media query is OK.
 *
 * @format
 */

import { Link } from 'gatsby';
import * as React from 'react';

import '../styles/index.scss';
import gsap from 'gsap';
import Frame from '../components/frame';

const NoAuthority = () => {
	React.useEffect(() => {
		gsap.from('.error-content-wrapper', {
			y: '80%vh',
			opacity: 0,
			ease: 'power1.inOut',
			duration: 1.8,
		});
	}, []);

	return (
		<Frame>
			{/* Error 404 content  */}
			<div
				className='error-content-wrapper
				 items-center flex flex-col
				 relative px-24 z-20 h-screen min-h-[680px]
				 '
				style={{
					background:
						'linear-gradient(0deg,  #f6f4ff  0%, hsl(0, 0%, 100%) 100%)',
				}}
			>
				<div
					className='gap-5
				items-center flex flex-col
				overflow-visible relative w-4/5
				h-min max-h-[700px] justify-start content-center'
				>
					<div className='outline-none flex flex-col justify-start items-center'>
						<div
							className='text-[120px] font-extrabold -tracking-[10px]'
							style={{ color: 'var(--purple)' }}
						>
							402
						</div>
					</div>
					<div className='gap-5 flex flex-col flex-wrap justify-center items-center'>
						<div>
							<h2>访问被拒绝</h2>
						</div>
						<div>
							<p className='text-xl'>
								你现在所查看的页面需要账户登录。
								<br />
								请返回到首页.
							</p>
						</div>
						<div>
							<div
								className='pointer-events-auto cursor-pointer px-6 py-4  text-white rounded-lg'
								style={{
									backgroundColor: 'var(--purple)',
									borderColor: 'white',
									filter: 'brightness(0.89937)',
								}}
							>
								<Link to='/'>
									<div>
										<p className='font-bold text-sm leading-4'>返回首页</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Frame>
	);
};

export default NoAuthority;

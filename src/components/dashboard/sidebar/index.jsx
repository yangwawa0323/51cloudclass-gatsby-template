import React from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import Logo from '../../../assets/img/CloudClass-8.png';
import sidebar from '../../../data/sidebar';
import { Link } from 'gatsby';
import { ClickAwayListener } from '@mui/material';

const Sidebar = () => {
	const { activeMenu, setActiveMenu } = useStateContext();
	return (
		<>
			{activeMenu && (
				<ClickAwayListener onClickAway={() => setActiveMenu(false)}>
					<div className='flex flex-col min-h-screen justify-start items-start shadow-lg'>
						<div className='py-4 self-center'>
							<Link to='/'>
								<img
									className='w-16 h-auto'
									src={Logo}
									alt='51cloudclass logo'
								/>
							</Link>
						</div>
						{/* sidebar items */}
						<div className='self-center w-full'>
							<ul className='min-w-[240px] flex gap-4 flex-col list-none text-gray-400'>
								{Object.getOwnPropertyNames(sidebar).map((property) => (
									<li
										className='font-extrabold tracking-wider px-4'
										key={sidebar[property].title}
									>
										<div className='flex gap-1 items-center'>
											<span>{sidebar[property].icon}</span>
											<span>{sidebar[property].title}</span>
										</div>
										{/* sidebar sub-items */}
										<ul className='flex flex-col list-none text-gray-500'>
											{sidebar[property].items?.map((item, index) => (
												<Link
													to={item.link || '#'}
													key={index}
												>
													<li className='text-sm duration-300 transition-all rounded-lg text-slate-700 hover:text-purple-800 hover:bg-purple-100 px-10 py-2'>
														<div className='flex gap-1 items-center'>
															<span>{item.icon}</span>
															<span className='font-normal tracking-wider'>
																{item.title}
															</span>
														</div>
													</li>
												</Link>
											))}
										</ul>
									</li>
								))}
							</ul>
						</div>
					</div>
				</ClickAwayListener>
			)}
		</>
	);
};

export default Sidebar;

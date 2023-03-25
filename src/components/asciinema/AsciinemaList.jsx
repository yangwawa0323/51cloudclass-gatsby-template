/** @format */

import * as React from 'react';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'gatsby';
import { getTitle, formatDate } from '../../utils/tools';
// import ContentPasteGo from "@mui/icons-material/ContentPasteGo";
import ArrowForward from '@mui/icons-material/ArrowForward';
import { svgIcons } from '../../utils/image';
import SvgIcon from '@mui/material/SvgIcon';

const AsciinemaList = ({ pageContext }) => {
	return (
		<div>
			<Navbar
				backgroundColor='#7421fc'
				textColor='white'
			/>
			<main className='p-24 min-w-[425px] min-h-[500px] '>
				<div className='flex flex-col md:flex-row gap-10'>
					<div className='flex-1'>
						<div className='sticky top-[120px]'>
							<div>
								<p className='text-sm font-bold uppercase text-purple-600'>
									complete toolkit
								</p>
							</div>
							<div>
								<h3>
									Make your site
									<br />
									better with Ultra.
								</h3>
							</div>
							<div>
								<p className='text-gray-500 text-sm font-medium'>
									Create beautiful pages within minutes directly in Framer.
									Easily customize images, content, and style to make it your
									own.
								</p>
							</div>
						</div>
					</div>
					<div className='flex-1 lg:flex-2 flex flex-col gap-4'>
						{pageContext.asciinemas.map((ascii, index) => {
							const content = JSON.parse(ascii.content);
							const title = getTitle(content);
							return (
								<div className='rounded-xl border-[1px] shadow-md bg-white p-8'>
									<div className='flex flex-col gap-4'>
										<div>
											<div>
												<div className='p-2 rounded-md bg-gray-100 text-purple-600 w-min'>
													<SvgIcon component={svgIcons[index]} />
												</div>
											</div>
										</div>
										<div className='flex flex-col gap-4'>
											<div>
												<h5>
													<Link to={`/asciinema/${ascii.ID}`}> {title}</Link>
													<span className='pl-2 text-xs text-gray-500'>
														{formatDate(
															new Date(ascii.CreatedAt),
															'yyyy-mm-dd HH:MM'
														)}
													</span>
												</h5>
											</div>
											<div>
												<p className='text-gray-500 font-medium text-sm'>
													Choose from 20+ pages from various categories.
													Customize your page, hit publish and instantly see
													your site live.{' '}
												</p>
											</div>
											<div>
												<Link to={`/asciinema/${ascii.ID}`}>
													<div className='flex flex-row gap-2 cursor-pointer items-center text-sm text-purple-700'>
														<div>
															<p className=' font-semibold'>Explore pages</p>
														</div>
														<div>
															<div>
																<ArrowForward />
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/*  */}
			</main>
			<Footer />
		</div>
	);
};

export default AsciinemaList;

/** @format */

import * as React from 'react';

import { Link } from 'gatsby';
import { getTitle, formatDate } from '../../utils/tools';
// import ContentPasteGo from "@mui/icons-material/ContentPasteGo";
import ArrowForward from '@mui/icons-material/ArrowForward';
import { svgIcons } from '../../utils/image';
import SvgIcon from '@mui/material/SvgIcon';
import Frame from '../frame';
import { easeIn } from '../../utils/animate';
import gsap from 'gsap';


const AsciinemaList = ({ pageContext }) => {

	React.useEffect(() => {

		var tl = gsap.timeline();
		easeIn('.gsap-main-title', {}, tl)

		var len = pageContext.asciinemas?.length || 0;
		for (var i = 0; i < len; i++) {
			easeIn(`.gsap-asciinema.gsap-asciinema-${i}`, { delay: 0.3 }, tl)
		}
	}, [])

	return (
		<Frame>

			<main className='p-24 min-h-[500px] '>
				<div className='flex flex-col md:flex-row gap-10'>
					<div className='gsap-main-title flex-1'>
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
								<div key={index} className={`gsap-asciinema gsap-asciinema-${index} rounded-xl border-[1px] shadow-md bg-white p-8`}>
									<div className='flex flex-col gap-4'>
										<div>
											<div>
												<div className='p-2 rounded-md bg-gray-100 text-purple-600 w-min'>
													<SvgIcon component={svgIcons[index]} />
												</div>
											</div>
										</div>
										<div className='flex flex-col gap-4'>
											<Link to={`/asciinemas/${ascii.ID}`}>
												<div>
													<h5>
														{title}
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
												</div>
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/*  */}
			</main>
		</Frame >
	);
};

export default AsciinemaList;

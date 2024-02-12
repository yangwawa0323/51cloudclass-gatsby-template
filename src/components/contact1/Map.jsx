/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';
import mapPicture from '../../assets/img/page-thumbnail/map.webp';
import { MdOutlineYoutubeSearchedFor } from 'react-icons/md';

const MapContainer = () => {
	return (
		<div
			className='gap-32 flex flex-col justify-center items-center py-24 px-12'
			style={{
				backgroundColor: '#8800ff',
			}}
		>
			<div className='justify-start flex flex-col gap-14 h-min max-w-[1200px] pt-12'>
				<div className='text-white gap-5'>
					<div>
						<p className='uppercase text-gray-100 font-extrabold'>contact us</p>
					</div>
					<div>
						<h1 className='text-white'>We can help</h1>
					</div>
				</div>
				<div className='flex flex-row gap-10'>
					<div className='max-w-[600px] max-h-[600px] flex-1  rounded-3xl bg-gray-300 shadow-xl overflow-hidden'>
						<img
							alt=''
							src={mapPicture}
							className='object-cover object-top'
						/>
					</div>
					<div className='flex-1 flex flex-col text-white gap-12'>
						<div className='flex flex-col g'>
							<div>
								<h4 className='text-white'>Get in touch</h4>
							</div>
							<div>
								<p>
									We’re always here to help. Contact us if you are experiencing
									issues with out product or have any questions.
								</p>
							</div>
							<div>
								<div>
									<div className='flex flex-row gap-3'>
										<div>
											<p>Get a demo</p>
										</div>
										<div className='hover:translate-x-1 duration-1000'>
											<IoIosArrowRoundForward />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<h4 className='text-white'>Address</h4>
							</div>
							<div>
								<p>
									Singel 258
									<br />
									1234 AB Amsterdam
									<br />
									The Netherlands
								</p>
							</div>
						</div>
						<div>
							<div>
								<div>
									<div className='flex flex-row gap-3'>
										<div>
											<p>support@framer.com</p>
										</div>
										<div>
											<div className='hover:translate-x-1 duration-1000'>
												<IoIosArrowRoundForward />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className='flex flex-row gap-3'>
									<div>
										<p>1800 648 659</p>
									</div>
									<div>
										<div className='hover:translate-x-1 duration-1000'>
											<IoIosArrowRoundForward />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row gap-4'>
							<div>
								<div className='flex flex-row gap-3'>
									<div
										style={{
											backgroundColor: 'rgba(255,255,255, 0.3)',
											color: 'white',
										}}
										className='hover:scale-110 duration-1000 flex items-center justify-center rounded-full h-12 w-12'
									>
										<CiTwitter />
									</div>
								</div>
							</div>
							<div>
								<div className='flex flex-row gap-3'>
									<div
										style={{
											backgroundColor: 'rgba(255,255,255, 0.3)',
											color: 'white',
										}}
										className='hover:scale-110 duration-1000 flex items-center justify-center rounded-full h-12 w-12'
									>
										<CiLinkedin />
									</div>
								</div>
							</div>
							<div>
								<div
									style={{
										backgroundColor: 'rgba(255,255,255, 0.3)',
										color: 'white',
									}}
									className='hover:scale-110 duration-1000 flex items-center justify-center rounded-full h-12 w-12'
								>
									<CiInstagram />
								</div>
							</div>
							<div>
								<div
									style={{
										backgroundColor: 'rgba(255,255,255, 0.3)',
										color: 'white',
									}}
									className='hover:scale-110 duration-1000 flex items-center justify-center rounded-full h-12 w-12'
								>
									<MdOutlineYoutubeSearchedFor />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapContainer;

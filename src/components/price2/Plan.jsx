/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PlanSection = () => {
	return (
		<div
			className='bg-white flex flex-col justify-center items-center
		 gap-20 pt-50 px-24 pb-0 z-10'
		>
			<div className='flex flex-col gap-4 h-min max-w-[460px] overflow-hidden '>
				<div>
					<p className='uppercase font-extrabold'>Select a plan</p>
				</div>
				<div>
					<h1>Start building sites for free.</h1>
				</div>
			</div>
			<div className='free-icons-wrap1 cursor-pointer flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
				<div className='gradient-background xl:flex-row xl:gap-48  flex  lg:flex-col gap-5'>
					<div className='flex flex-col h-min gap-1'>
						<div>
							<p className='uppercase text-purple-600 font-extrabold'>Free</p>
						</div>
						<div className='flex flex-row'>
							<div>
								<h3>$</h3>
							</div>
							<div>
								<h3>0</h3>
							</div>
							<div>
								<h3>/mo</h3>
							</div>
						</div>
					</div>
					<div className='free-icons  text-purple-700 flex flex-row flex-wrap  gap-4 h-min justify-start'>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>For hobby sites</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Design editor</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Framer banner</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>100 CMS items</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>1,000 visitors</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Unlimited viewers</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='free-icons-wrap2 cursor-pointer flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
				<div className='gradient-background xl:flex-row xl:gap-48  flex lg:flex-col gap-5'>
					<div className='flex flex-col h-min gap-1'>
						<div>
							<p className='uppercase text-white font-extrabold'>Basic</p>
						</div>
						<div className='flex flex-row'>
							<div>
								<h3>$</h3>
							</div>
							<div>
								<h3>15</h3>
							</div>
							<div>
								<h3>/mo</h3>
							</div>
						</div>
					</div>
					<div className='free-icons  text-white flex flex-row flex-wrap  gap-4 h-min justify-start'>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>For personal sites</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Custom domain</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Password protect</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>1,000 CMS items</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>10,000 visitors</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Unlimited viewers</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='free-icons-wrap3 cursor-pointer flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
				<div className='gradient-background xl:flex-row xl:gap-48  flex lg:flex-col gap-5'>
					<div>
						<div>
							<p className='font-extrabold uppercase'>Pro</p>
						</div>
						<div className='flex flex-row'>
							<div>
								<h3>$</h3>
							</div>
							<div>
								<h3>25</h3>
							</div>
							<div>
								<h3>/mo</h3>
							</div>
						</div>
					</div>
					<div className='free-icons text-white flex flexrow flex-wrap gap-4 h-min justify-start'>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Commercial sites</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Site staging</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Visitor analytics</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>10,000 CMS items</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>100,000 visitors</h5>
							</div>
						</div>
						<div>
							<div>
								<CheckCircleIcon />
							</div>
							<div>
								<h5>Unlimited viewers</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanSection;

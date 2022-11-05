import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar';
import VPN from '../assets/img/VPNaNlpAPRXTqrOXAT44QsmNMxE.webp';

const ChangeLog = () => {
	return (
		<div>
			<Navbar />
			<main className='items-center bg-white'>
				<div className='flex flex-col  justify-center items-center w-full min-h-full'
					style={{
						background: 'linear-gradient(0deg, #f6f4ff 0%, hsl(0, 0%, 100%) 100%)',
					}}>
					{/*  Change log  */}
					<div className='max-w-[500px] flex flex-col gap-5 justify-center items-center h-min pt-48 pb-24'
					>
						<div >
							<h1 className='font-extrabold tracking-tighter text-[68px]'>
								Changelog
							</h1>
						</div>
						<div >
							<p className='text-gray-600 text-xl text-center font-medium'>
								Follow this page to keep updated with the latest template changes.
							</p>
						</div>
					</div>
				</div>

				<div className='justify-evenly flex flex-row flex-nowrap relative h-min overflow-hidden p-24 w-full content-center items-center'>
					<div className='flex flex-1 flex-row justify-between items-start h-min max-w-[1200px] relative w-[1px]'>
						<div className='flex flex-col justify-start w-auto' >
							<h3 className='text-xl font-extrabold text-gray-500'>
								Sep 27, 2022
							</h3>
						</div>
						<div className='flex flex-grow flex-col gap-10 	max-w-2xl relative w-[1px] items-start justify-start'>
							<div className='flex flex-col gap-5'>
								<div >
									<h3 className='text-xl font-extrabold'>	Template Release</h3>
								</div>
								<div >
									<p className='text-lg font-medium text-gray-600'>
										Initial Boost multipurpose Framer template release.
										Combine sections from a range of categories to easily
										assemble pages that meet the needs of your growing business.
									</p>
								</div>
							</div>
							<div className='aspect-auto border-0 h-[535px] w-[700px]'
							
							>
								<div >
									<div >
										<img className='object-cover object-center rounded-3xl'
											style={{ aspectRatio: '1.30841 / 1'}}
											src={VPN} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default ChangeLog
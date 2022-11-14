import React from 'react'

const BoostSection = () => {
	return (
		<div className='boost-your-website relative h-[880px] flex flex-col justify-center items-center z-[1] px-24 gap-24 overflow-hidden' >
			<div className='absolute inset-0 pointer-events-none select-none' >
				<img
					className='object-center'
					src="https://framerusercontent.com/images/yRrxkmtKj7pwDfc0FGhTxIE4fFc.jpg" alt="" />
			</div>
			<div className='explore-pages z-[2] flex flex-col gap-4 justify-center items-center max-w-[680px]'>
				<div >
					<p className='text-gray-300 uppercase font-bold text-sm'>Free Framer Template</p>
				</div>
				<div >
					<h1 className='text-white'>Boost your website.</h1>
				</div>
				<div >
					<p className='text-white text-center font-medium text-[24px] break-words'>Quickly assemble pages from various categories and customize them to your business's needs.</p>
				</div>
				<div >
					<a>
						<p className='rounded-lg px-6 py-3 bg-white hover:bg-gray-200 duration-700 font-medium text-sm'>
							Explore Pages</p>
					</a>
				</div>
			</div>
		</div>
	)
}

export default BoostSection
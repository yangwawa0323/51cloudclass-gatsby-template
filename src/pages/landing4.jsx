/**
 * Media query is OK.
 */
import * as React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BoostSection from '../components/landing4/Boost';
import OurSuccess from '../components/landing4/Our';

const LandingPage4 = () => {
	return (
		<div>
			{/* Nav bar */}
				<Navbar />
			
			{/* boost section */}
			<main className='min-w-[768px]'>
				<BoostSection />
				<OurSuccess />
			</main>
			
			{/* footer */}
				<Footer />
		</div>
	)
}

export default LandingPage4
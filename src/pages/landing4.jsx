import * as React from 'react'
import gsap from 'gsap';
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
			<main>
				<BoostSection />
				<OurSuccess />
			</main>
			
			{/* footer */}
				<Footer />
		</div>
	)
}

export default LandingPage4
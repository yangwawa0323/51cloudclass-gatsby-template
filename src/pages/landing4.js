import * as React from 'react'
import gsap from 'gsap';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';
import BoostSection from '../components/landing4/boost';
import OurSuccess from '../components/landing4/our';

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
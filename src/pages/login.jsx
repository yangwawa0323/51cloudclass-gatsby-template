/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BoostSection from '../components/login/Boost';
// import OurSuccess from '../components/login/Our';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const LandingPage4 = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				{/* Nav bar */}
				<Navbar />

				{/* boost section */}
				<main className='min-w-[768px]'>
					<BoostSection />
					{/* <OurSuccess /> */}
				</main>

				{/* footer */}
				<Footer />
			</div>
		</QueryClientProvider>
	);
};

export default LandingPage4;

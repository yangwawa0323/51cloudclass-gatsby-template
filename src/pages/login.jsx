/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import BoostSection from '../components/login/Boost';
// import OurSuccess from '../components/login/Our';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Frame from '../components/frame';

const queryClient = new QueryClient();

const LandingPage4 = () => {
	return (
		<Frame>
			<QueryClientProvider client={queryClient}>
				<BoostSection />
				{/* <OurSuccess /> */}
			</QueryClientProvider>
		</Frame>
	);
};

export default LandingPage4;

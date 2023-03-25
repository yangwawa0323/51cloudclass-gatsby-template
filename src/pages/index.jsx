/** @format */

import * as React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

// move the index.scss to navbar.js, otherwise by input the page URI
// has not style defined.

// import '../styles/index.scss';

import ThreeCards from '../components/index/ThreeCards';
import CompleteToolkit from '../components/index/CompleteToolkit';
import CompletedPages from '../components/index/CompletedPages';
import BoostSection from '../components/index/Boost';
import EssentialSection from '../components/index/Essential';
import FractionSection from '../components/index/Fraction';

// import { useSelector } from 'react-redux';
import Courses from '../components/index/course';
import Frame from '../components/frame';

function Index() {
	// const account = useSelector((state) => state.account);

	return (
		<Frame>
			<div className='bg-white flex flex-col gap-3 h-min relative w-full items-center'>
				<div className='w-full flex flex-col justify-center items-center gap-20 boost-section'>
					{/* Boost Section */}
					<BoostSection />
				</div>

				<div>
					{/* course list */}
					<Courses />
				</div>

				<div className='px-12 py-24 flex flex-col justify-center items-center gap-20 completed-toolkit'>
					{/* Complete toolkit  */}
					<CompleteToolkit />

					{/* Three cards */}
					<ThreeCards />
				</div>
				<div
					id='pages'
					className='px-12 pb-24 w-full justify-center flex'
				>
					{/* Completed pages */}
					<CompletedPages />
				</div>
				<div
					className='w-full'
					style={{ backgroundColor: '#f6f4ff' }}
				>
					{/* Essential section */}
					<EssentialSection />
				</div>
				<div
					className='w-full'
					style={{
						backgroundColor: '#7421fc',
					}}
				>
					{/* Fraction section */}
					<FractionSection />
				</div>
			</div>
		</Frame>
	);
}

export default Index;

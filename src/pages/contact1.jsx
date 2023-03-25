/**
 * Media query is OK.
 *
 * @format
 */

import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import MapContainer from '../components/contact1/Map';

const Contact1 = () => {
	return (
		<div>
			<Navbar
				backgroundColor={'#8800ff'}
				textColor={'white'}
			/>
			<main className='min-w-[425x]'>
				<MapContainer />
			</main>
			<Footer />
		</div>
	);
};

export default Contact1;

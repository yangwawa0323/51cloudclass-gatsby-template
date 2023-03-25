/** @format */

import React from 'react';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

const Frame = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main className='min-w-[425px] w-full'>{children}</main>
			<Footer />
		</div>
	);
};

export default Frame;

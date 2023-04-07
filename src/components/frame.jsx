/** @format */

import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
// import Navbar from './common/Navbar';

const Frame = ({ children }) => {
	return (
		<div>
			<Header />
			<main className='min-w-[425px] w-full'>{children}</main>
			<Footer />
		</div>
	);
};

export default Frame;

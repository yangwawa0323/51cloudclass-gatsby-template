/** @format */

import React, { memo, useEffect } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import scrollTo from 'gatsby-plugin-smoothscroll';
// import Navbar from './common/Navbar';

type FrameProps = {
	children: React.ReactNode;
	noFooter: boolean;
};

const Frame = ({ children, noFooter = false }: FrameProps) => {
	useEffect(() => {
		scrollTo('#frame-top');
	}, []);
	return (
		<div id='frame-top'>
			<Header />
			<main className='w-full flex flex-col items-center'>{children}</main>
			{noFooter || <Footer />}
		</div>
	);
};

export default Frame;

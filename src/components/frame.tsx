/** @format */

import React, { memo } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
// import Navbar from './common/Navbar';

type FrameProps = {
	children: React.ReactNode;
};

const Frame = memo(({ children }: FrameProps) => {
	return (
		<div>
			<Header />
			<main className='w-full flex flex-col items-center'>{children}</main>
			<Footer />
		</div>
	);
});

export default Frame;

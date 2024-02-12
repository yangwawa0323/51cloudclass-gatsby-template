import React from 'react';
import Navbar from './navbar';
import PagePane from './PagePane';

const RightPane = () => {
	return (
		<div className='fixed w-full md:static'>
			<Navbar />
			<PagePane />
		</div>
	);
};

export default RightPane;

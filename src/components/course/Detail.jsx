/** @format */

import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import { Box } from '@mui/material';
import BoostSection from './Boost';

const Detail = ({ pageContext }) => {
	return (
		<div>
			<Navbar />
			<div className='flex items-center w-full'>
				<BoostSection course={pageContext.course} />
			</div>
			<Footer />
		</div>
	);
};

export default Detail;

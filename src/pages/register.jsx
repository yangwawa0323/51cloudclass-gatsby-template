/** @format */

import { Typography, Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const register = () => {
	return (
		<Box className='flex flex-col gap-24'>
			<Navbar />
			<main>
				<Typography variant='h3'>开发中</Typography>
			</main>
			<Footer />
		</Box>
	);
};

export default register;

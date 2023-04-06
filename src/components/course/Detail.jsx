/** @format */

import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import BoostSection from './Boost';

const Detail = ({ pageContext }) => {
	return (
		<>
			<Navbar />
			<BoostSection course={pageContext.course} />
			<Footer />
		</>
	);
};

export default Detail;

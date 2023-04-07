/** @format */

import React from 'react';
import Frame from '../frame';
import BoostSection from './Boost';

const Detail = ({ pageContext }) => {
	return (
		<Frame >
			<BoostSection course={pageContext.course} />
		</Frame>
	);
};

export default Detail;

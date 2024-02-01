import React, { useEffect } from 'react';
import { useLocation, navigate } from '@reach/router';
import { Button } from '@mui/material';

const Reach = () => {
	const location = useLocation();

	const handleChangeSearch = () => {
		const query = new URLSearchParams();
		query.append('randomStr', `random-${Math.random()}`);
		const path = `${location.pathname}?${query.toString()}`;
		// console.log(query, path);
		navigate(path);
	};

	return (
		<div>
			<h1>Reach</h1>
			<p>search: {JSON.stringify(location.search, null, 2)}</p>
			<Button
				variant='contained'
				onClick={handleChangeSearch}
			>
				Change
			</Button>
		</div>
	);
};

export default Reach;

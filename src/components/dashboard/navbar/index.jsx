import React, { useEffect } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import { IconButton } from '@mui/material';
import { MdOutlineDehaze } from 'react-icons/md';

const Navbar = () => {
	const { screenSize, setScreenSize, activeMenu, setActiveMenu } =
		useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const handleToggle = () => {
		setActiveMenu((prevStatus) => !prevStatus);
	};

	return (
		<div className='ml-4'>
			<IconButton onClick={handleToggle}>
				<MdOutlineDehaze />
			</IconButton>
		</div>
	);
};

export default Navbar;

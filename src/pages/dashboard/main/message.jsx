import React from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery, SwipeableDrawer, Box, Drawer } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import UserListCard from '../../../components/site-messages/UserListCard';
import MessageDetail from '../../../components/site-messages/MessageDetail';
import { useCallback } from 'react';
import { useTheme } from '@mui/material';
import { debugLog, getAxios } from '51cloudclass-utilities/src/utils';
import { useQuery } from '@tanstack/react-query';
import { useStateContext } from '../../../contexts/ContextProvider';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	drawer: {
		position: 'relative',
		// marginRight: 'auto',
		width: 330,
		'& .MuiBackdrop-root': {
			display: 'none',
		},
		'& .MuiDrawer-paper': {
			width: 320,
			position: 'absolute',
			height: (props) => props.height,
			transition: 'none !important',
		},
	},
});

const SiteMessage = () => {
	const { setMessageData } = useStateContext();
	const [open, setOpen] = useState(true);
	const containerRef = useRef();
	const [height, setHeight] = useState(0);

	const theme = useTheme();
	const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

	const classes = useStyles({ height: height });

	// const useUserListCard = useCallback((open) => {
	// 	if (open) {
	// 		return (
	// 			<Drawer
	// 				open={open && !matchDownSM}
	// 				className={classes.drawer}
	// 				variant='persistent'
	// 				anchor='left'
	// 			>
	// 				{/* {userListCard} */}
	// 				<UserListCard />
	// 			</Drawer>
	// 		);
	// 	} else {
	// 		return <></>;
	// 	}
	// }, []);

	useEffect(() => {
		if (open) {
			setHeight(containerRef.current?.clientHeight);
		} else {
			setHeight(0);
		}
	}, [open]);

	const handleFilterIconClick = () => {
		setOpen(!open);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const fetchUserList = async () => {
		const axiosInstance = getAxios();
		let url = `${process.env.GATSBY_API_SERVER}/users/friends`;
		return await axiosInstance.get(url).then((response) => {
			setMessageData(response.data);
			return response.data;
		});
	};

	const { isLoading, isError } = useQuery({
		queryKey: ['fetch-user-list'],
		queryFn: () => fetchUserList(),
	});

	if (isLoading) return <div>Loading</div>;
	if (isError) return <div>Error</div>;

	return (
		<DashboardLayout>
			<Box
				sx={{
					height: 'calc(100vh - 60px)',
					padding: '0px !important',
					mr: '24px',
				}}
			>
				<Box
					ref={containerRef}
					style={{ position: 'relative', height: '100%' }}
					display='flex'
					component='div'
				>
					{/* {useUserListCard(open)} */}
					{/* <SwipeableDrawer
						sx={{
							display: { xs: 'block', md: 'hidden' },
							'& .MuiDrawer-paper': {
								width: 320,
								// transition: 'none !important'
							},
						}}
						open={open && matchDownSM}
						onOpen={() => {}}
						onClose={handleDrawerClose}
						anchor='left'
					> */}
					<UserListCard />
					{/* </SwipeableDrawer> */}
					<MessageDetail
						onClick={handleFilterIconClick}
						status={open}
					/>
				</Box>
			</Box>
		</DashboardLayout>
	);
};

export default SiteMessage;

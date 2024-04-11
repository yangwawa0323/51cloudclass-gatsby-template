import React from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery, Box } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import UserListCard from '../../../components/site-messages/UserListCard';
import MessageDetail from '../../../components/site-messages/MessageDetail';
import { useTheme } from '@mui/material';
import { getAxios } from '../../../utilities/utils';
import { useQuery } from '@tanstack/react-query';
import { useStateContext } from '../../../contexts/ContextProvider';
import SimpleBarScroll from '../../../components/common/SimpleBar';
import Loading from '../../../components/Loading';
import { decryptJWE2JSON } from '../../../utils/jwe-decrypt';

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
	const matchDownSM = useMediaQuery('(max-width:440px)');

	const classes = useStyles({ height: height });

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
		const response = await axiosInstance
			.get(url)
			.then((response) => {
				return decryptJWE2JSON(response.data.result.encrypted);
			})
			.then((json) => {
				// debugLog('json:', json);
				setMessageData(json);
				return json;
			});
		return response;
	};

	const { isLoading, isError } = useQuery({
		queryKey: ['fetch-user-list'],
		queryFn: () => fetchUserList(),
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error</div>;

	return (
		<DashboardLayout>
			<Box
				ref={containerRef}
				component='div'
			>
				<SimpleBarScroll style={{ height: '80vh' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: matchDownSM ? 'column' : 'row',
						}}
					>
						<MessageDetail
							onClick={handleFilterIconClick}
							status={open}
						/>
						<UserListCard />
					</Box>
				</SimpleBarScroll>
			</Box>
		</DashboardLayout>
	);
};

export default SiteMessage;

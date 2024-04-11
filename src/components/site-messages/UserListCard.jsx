import React, { useState } from 'react';

import {
	Card,
	Box,
	Typography,
	Chip,
	OutlinedInput,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	Button,
	useMediaQuery,
	useTheme,
	Tab,
	Tabs,
} from '@mui/material';

import UserItem from './UserItem';
import SimpleBarScroll from '../common/SimpleBar';
import { debounce } from '../utils/tools';

import { IoSearch as SearchOutlined } from 'react-icons/io5';
import { CiSettings as SettingOutlined } from 'react-icons/ci';
import { AiOutlineLogout as LogoutOutlined } from 'react-icons/ai';
import { getAxios } from '../../utilities/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { decryptJWE2JSON } from '../../utils/jwe-decrypt';

const UserListCard = () => {
	const axiosInstance = getAxios();
	const [filter, setFilter] = useState('');
	const theme = useTheme();
	const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const context = useStateContext();
	const queryClient = useQueryClient();

	const filterUser = debounce((event) => {
		setFilter(event.target.value);
	}, 300);

	const getJoinSenders = async () => {
		let url = `${process.env.GATSBY_API_SERVER}/messages/friend-join/senders`;
		return axiosInstance
			.get(url)
			.then((response) => decryptJWE2JSON(response.data.result.encrypted));
	};

	const acceptJoin = async (user) => {
		// /accept-join/:sender_id
		let url = `${process.env.GATSBY_API_SERVER}/messages/accept-join/${user.ID}`;
		axiosInstance.patch(url);
	};

	const mutation = useMutation({
		mutationFn: (user) => acceptJoin(user),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['get-join-senders', 'fetch-user-list'],
			});
			queryClient.refetchQueries({
				queryKey: ['get-join-senders', 'fetch-user-list'],
				type: 'all',
			});
		},
	});

	const { data: senders, isLoading } = useQuery({
		queryKey: ['get-join-senders'],
		queryFn: getJoinSenders,
	});

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	return (
		<Card
			variant='outlined'
			sx={{
				border: 'unset',
				width: '100%',
				pt: '24px',
				maxWidth: '320px',
			}}
		>
			<Box>
				<Box
					display='flex'
					px='24px'
					gap='12px'
					flexDirection='column'
					flex={1}
				></Box>
				{/* Friend List */}
				<Box
					sx={{
						flex: 2,
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
					>
						<Tab
							{...a11yProps(0)}
							label={
								<Box
									component='div'
									display='flex'
									alignItems='center'
								>
									<Typography>好友列表</Typography>
									<Chip
										label={context.messageData?.result?.friends.length || 0}
										color='secondary'
										size='small'
										variant='filled'
										sx={{ ml: '4px', borderRadius: '50%' }}
									/>
								</Box>
							}
						/>
						<Tab
							label='好友申请'
							{...a11yProps(1)}
						/>
					</Tabs>
					<Box
						mt='20px'
						role='tabpanel'
						hidden={value !== 0}
						id={`simple-tabpanel-0`}
						aria-labelledby={`simple-tab-0`}
					>
						<OutlinedInput
							onChange={filterUser}
							size='small'
							startAdornment={<SearchOutlined />}
							placeholder='search'
						/>
						{value === 0 && (
							<SimpleBarScroll sx={{ height: '60vh' }}>
								<nav
									style={{ padding: '0px 12px' }}
									aria-label='main mailbox folders'
								>
									<List>
										{context.messageData?.result?.friends?.map((user, idx) => {
											return (
												<React.Fragment key={idx}>
													<ListItem disablePadding>
														<UserItem user={user} />
													</ListItem>
												</React.Fragment>
											);
										})}
									</List>
								</nav>
							</SimpleBarScroll>
						)}
					</Box>
				</Box>
				{/* Join friend list */}
				<Box
					mt='20px'
					role='tabpanel'
					hidden={value !== 1}
					id={`simple-tabpanel-1`}
					aria-labelledby={`simple-tab-1`}
					sx={{
						mt: '20px',
						flex: 2,
						width: '100%',
						alignContent: 'center',
						textAlign: 'center',
						maxWidth: 240,
						bgcolor: 'background.paper',
					}}
				>
					<Typography variant='body1'>添加好友申请</Typography>
					<SimpleBarScroll>
						<nav
							style={{ padding: '0px 12px' }}
							aria-label='main mailbox folders'
						>
							<List>
								{senders?.result?.users?.map((user, idx) => {
									return (
										<Box key={idx}>
											<ListItem disablePadding>
												<UserItem user={user} />
												<Button
													size='small'
													variant='outlined'
													onClick={() => mutation.mutate(user)}
												>
													同意
												</Button>
											</ListItem>
										</Box>
									);
								})}
							</List>
						</nav>
					</SimpleBarScroll>
					{!matchDownSM && (
						<List sx={{ paddingX: '24px' }}>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<LogoutOutlined />
									</ListItemIcon>
									<ListItemText
										primary={<Typography variant='body1'>退出</Typography>}
									/>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton
									component='a'
									href='#simple-list'
								>
									<ListItemIcon>
										<SettingOutlined />
									</ListItemIcon>
									<ListItemText
										primary={<Typography variant='body1'>设置</Typography>}
									/>
								</ListItemButton>
							</ListItem>
						</List>
					)}
				</Box>
			</Box>
		</Card>
	);
};

export default UserListCard;

/** @format */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
	Avatar,
	Box,
	ButtonBase,
	CardContent,
	ClickAwayListener,
	IconButton,
	Paper,
	Popper,
	Stack,
	Tab,
	Tabs,
	Typography,
} from '@mui/material';

// project import
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import Transitions from '../Transition';

import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/account/accountSlice';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`profile-tabpanel-${index}`}
			aria-labelledby={`profile-tab-${index}`}
			{...other}
		>
			{value === index && children}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `profile-tab-${index}`,
		'aria-controls': `profile-tabpanel-${index}`,
	};
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
	const dispatch = useDispatch();

	const theme = useTheme();

	const userInfo = useSelector((state) => state.account.userInfo);

	const handleLogout = async () => {
		console.log('Log out now');
		dispatch(logout());
	};

	const anchorRef = useRef(null);
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const iconBackColorOpen = 'grey.300';

	return (
		<Box sx={{ flexShrink: 0, ml: 0.75 }}>
			<ButtonBase
				sx={{
					p: 0.25,
					bgcolor: open ? iconBackColorOpen : 'transparent',
					borderRadius: 1,
					'&:hover': { bgcolor: 'secondary.lighter' },
				}}
				aria-label='open profile'
				ref={anchorRef}
				aria-controls={open ? 'profile-grow' : undefined}
				aria-haspopup='true'
				onClick={handleToggle}
			>
				<Stack
					direction='row'
					spacing={2}
					alignItems='center'
					sx={{ p: 0.5 }}
					data-tut='reactour__profile'
				>
					<Avatar
						alt='profile user'
						src={userInfo.avatar}
						sx={{ width: 48, height: 48 }}
					/>
					<Typography variant='caption'>{userInfo.username}</Typography>
				</Stack>
			</ButtonBase>
			<Popper
				placement='bottom-end'
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				popperOptions={{
					modifiers: [
						{
							name: 'offset',
							options: {
								offset: [0, 9],
							},
						},
					],
				}}
			>
				{({ TransitionProps }) => (
					<Transitions
						type='fade'
						in={open}
						{...TransitionProps}
					>
						{open && (
							<Paper
								sx={{
									width: 320,
									minWidth: 240,
									maxWidth: 320,
									[theme.breakpoints.down('md')]: {
										maxWidth: 250,
									},
								}}
							>
								<ClickAwayListener onClickAway={handleClose}>
									<Box>
										<CardContent sx={{ px: 2.5, pt: 3 }}>
											<div
												container
												justifyContent='space-between'
												alignItems='center'
											>
												<div>
													<Stack
														direction='row'
														spacing={1.25}
														alignItems='center'
													>
														<Avatar
															src={userInfo.avatar}
															alt='用户信息'
															sx={{ width: 48, height: 48 }}
														/>
														<Stack>
															<Typography variant='h6'>
																{userInfo.username}
															</Typography>
															<Typography
																variant='body2'
																color='textSecondary'
															>
																UI/UX Designer
															</Typography>
														</Stack>
													</Stack>
												</div>
												<div>
													<IconButton
														size='large'
														color='secondary'
														onClick={handleLogout}
													>
														<LogoutOutlined />
													</IconButton>
												</div>
											</div>
										</CardContent>
										{open && (
											<>
												<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
													<Tabs
														variant='fullWidth'
														value={value}
														onChange={handleChange}
														aria-label='profile tabs'
													>
														<Tab
															sx={{
																display: 'flex',
																flexDirection: 'row',
																justifyContent: 'center',
																alignItems: 'center',
																textTransform: 'capitalize',
															}}
															icon={
																<UserOutlined
																	style={{
																		marginBottom: 0,
																		marginRight: '10px',
																	}}
																/>
															}
															label='个人信息'
															{...a11yProps(0)}
														/>
														<Tab
															sx={{
																display: 'flex',
																flexDirection: 'row',
																justifyContent: 'center',
																alignItems: 'center',
																textTransform: 'capitalize',
															}}
															icon={
																<SettingOutlined
																	style={{
																		marginBottom: 0,
																		marginRight: '10px',
																	}}
																/>
															}
															label='设置'
															{...a11yProps(1)}
														/>
													</Tabs>
												</Box>
												<TabPanel
													value={value}
													index={0}
													dir={theme.direction}
												>
													<ProfileTab handleLogout={handleLogout} />
												</TabPanel>
												<TabPanel
													value={value}
													index={1}
													dir={theme.direction}
												>
													<SettingTab />
												</TabPanel>
											</>
										)}
									</Box>
								</ClickAwayListener>
							</Paper>
						)}
					</Transitions>
				)}
			</Popper>
		</Box>
	);
};

export default Profile;

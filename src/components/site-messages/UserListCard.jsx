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
	Divider,
} from '@mui/material';

import UserItem from './UserItem';
import SimpleBarScroll from '../common/SimpleBar';
import { debounce } from '../utils/tools';

import {
	SearchOutlined,
	LogoutOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { debugLog } from '51cloudclass-utilities/src/utils';
import { useStateContext } from '../../contexts/ContextProvider';

const UserListCard = () => {
	const [filter, setFilter] = useState('');

	const context = useStateContext();

	const filterUser = debounce((event) => {
		setFilter(event.target.value);
	}, 300);

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
				>
					<Box
						component='div'
						display='flex'
						alignItems='center'
					>
						<Typography variant='h5'>好友列表</Typography>
						<Chip
							label={context.messageData?.result?.friends.length || 0}
							color='secondary'
							size='small'
							variant='filled'
							sx={{ ml: '4px', borderRadius: '50%' }}
						/>
					</Box>
					<OutlinedInput
						onChange={filterUser}
						startAdornment={<SearchOutlined />}
						placeholder='search'
					/>
				</Box>
				<Box
					sx={{
						flex: 2,
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
					}}
				>
					<SimpleBarScroll
						style={{
							maxHeight: 520,
						}}
					>
						<nav
							style={{ padding: '0px 12px' }}
							aria-label='main mailbox folders'
						>
							<List>
								<ListItem>
									<Box>I am AI robot.</Box>
								</ListItem>
								{context.messageData?.result?.friends?.map((user, idx) => {
									return (
										<React.Fragment key={idx}>
											<ListItem disablePadding>
												<UserItem user={user} />
											</ListItem>
											<Divider />
										</React.Fragment>
									);
								})}
							</List>
						</nav>
					</SimpleBarScroll>
					<Divider />
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
				</Box>
			</Box>
		</Card>
	);
};

export default UserListCard;

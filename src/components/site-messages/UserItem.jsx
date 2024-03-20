/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
	ListItemAvatar,
	Box,
	ListItemButton,
	Badge,
	ListItemText,
	Avatar,
	Typography,
} from '@mui/material';
import { CheckCircleFilled, CheckOutlined } from '@ant-design/icons';
import { justifyAlignCenter } from '../utils/StyledMain';
import { random } from '../../components/utils/random';

import PropTypes from 'prop-types';
import { useStateContext } from '../../contexts/ContextProvider';
import { useQueryClient } from '@tanstack/react-query';

class Dot extends React.Component {
	render() {
		return (
			<Box
				sx={{ width: 8, height: 8, borderRadius: '50%' }}
				bgcolor={this.props.color}
			></Box>
		);
	}
}

Dot.propTypes = {
	color: PropTypes.string.isRequired,
};

const UserItem = ({ user }) => {
	const { setFriendId, friendId } = useStateContext();
	const queryClient = useQueryClient();

	const randomStatus = () => {
		return [
			<CheckOutlined style={{ color: 'rgb(24, 144, 255)' }} />,
			<CheckOutlined />,
			<Dot color='rgb(24, 144, 255)' />,
		][random(3)];
	};

	const randomTime = () => {
		return ['2天前', '7小时前', '5分钟前', '3天前'][random(4)];
	};

	const userAvatar = () => {
		return (
			<Avatar
				src={user?.avatar_url}
				alt={user?.name}
			></Avatar>
		);
	};

	const formattedUserInfo = (user) => {
		return [user.email, user.id].join(' ');
	};

	/*******************************************************
	 * from gin gorm the ID field is all UPPERCASE
	 */
	const handleListItemClick = () => {
		// Change the ID , react-query need re-fetch specific queryKey
		var prevUserId;
		setFriendId((prev) => {
			prevUserId = prev;
			return user.ID;
		});
		queryClient.invalidateQueries({
			queryKey: ['fetch-session-messages', prevUserId],
			refetchType: 'active',
		});
	};

	return (
		<ListItemButton
			disableRipple
			onClick={handleListItemClick}
		>
			<ListItemAvatar>
				<Badge>
					{userAvatar()}
					<Badge
						badgeContent=' '
						sx={{
							color: 'rgb(82, 196, 26)',
							top: '20%',
							right: '20%',
							height: '16px',
							padding: '4px',
						}}
					>
						<CheckCircleFilled />
					</Badge>
				</Badge>
			</ListItemAvatar>

			<ListItemText
				primary={
					<Box>
						<Box
							component='div'
							sx={{
								...justifyAlignCenter,
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<Typography variant='subtitle1'>{user?.name}</Typography>
							<Typography
								variant='caption'
								color='gray'
							>
								{randomTime()}
							</Typography>
						</Box>
					</Box>
				}
			/>
		</ListItemButton>
	);
};

export default UserItem;

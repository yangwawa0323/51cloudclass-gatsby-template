/** @format */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

// assets
import { LuWallet as WalletOutlined } from 'react-icons/lu';
import { LuUser2 as UserOutlined } from 'react-icons/lu';
import { AiOutlineLogout as LogoutOutlined } from 'react-icons/ai';
import { CgProfile as ProfileOutlined } from 'react-icons/cg';
import { FaRegEdit as EditOutlined } from 'react-icons/fa';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
	const theme = useTheme();

	const [selectedIndex, setSelectedIndex] = useState(0);
	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<List
			component='nav'
			sx={{
				p: 0,
				'& .MuiListItemIcon-root': {
					minWidth: 32,
					color: theme.palette.grey[500],
				},
			}}
		>
			<ListItemButton
				selected={selectedIndex === 0}
				onClick={(event) => handleListItemClick(event, 0)}
			>
				<ListItemIcon>
					<EditOutlined />
				</ListItemIcon>
				<ListItemText primary='编辑个人信息' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 1}
				onClick={(event) => handleListItemClick(event, 1)}
			>
				<ListItemIcon>
					<UserOutlined />
				</ListItemIcon>
				<ListItemText primary='查看个人信息' />
			</ListItemButton>

			<ListItemButton
				selected={selectedIndex === 3}
				onClick={(event) => handleListItemClick(event, 3)}
			>
				<ListItemIcon>
					<ProfileOutlined />
				</ListItemIcon>
				<ListItemText primary='学习记录查询' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 4}
				onClick={(event) => handleListItemClick(event, 4)}
			>
				<ListItemIcon>
					<WalletOutlined />
				</ListItemIcon>
				<ListItemText primary='付费查询' />
			</ListItemButton>
			<ListItemButton
				className='cursor-pointer'
				selected={selectedIndex === 2}
				onClick={handleLogout}
			>
				<ListItemIcon>
					<LogoutOutlined />
				</ListItemIcon>
				<ListItemText primary='退出' />
			</ListItemButton>
		</List>
	);
};

ProfileTab.propTypes = {
	handleLogout: PropTypes.func,
};

export default ProfileTab;

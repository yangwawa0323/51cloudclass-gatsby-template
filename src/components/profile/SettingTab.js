/** @format */

import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

// assets
import {
	CommentOutlined,
	LockOutlined,
	QuestionCircleOutlined,
	UserOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
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
					<QuestionCircleOutlined />
				</ListItemIcon>
				<ListItemText primary='服务' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 1}
				onClick={(event) => handleListItemClick(event, 1)}
			>
				<ListItemIcon>
					<UserOutlined />
				</ListItemIcon>
				<ListItemText primary='账户设置' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 2}
				onClick={(event) => handleListItemClick(event, 2)}
			>
				<ListItemIcon>
					<LockOutlined />
				</ListItemIcon>
				<ListItemText primary='学习模式' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 3}
				onClick={(event) => handleListItemClick(event, 3)}
			>
				<ListItemIcon>
					<CommentOutlined />
				</ListItemIcon>
				<ListItemText primary='反馈' />
			</ListItemButton>
			<ListItemButton
				selected={selectedIndex === 4}
				onClick={(event) => handleListItemClick(event, 4)}
			>
				<ListItemIcon>
					<UnorderedListOutlined />
				</ListItemIcon>
				<ListItemText primary='历史记录' />
			</ListItemButton>
		</List>
	);
};

export default SettingTab;

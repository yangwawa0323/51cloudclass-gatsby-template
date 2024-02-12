import React from 'react';
import { TiMessages } from 'react-icons/ti';
import { IoSchoolOutline } from 'react-icons/io5';
import { GoHistory } from 'react-icons/go';
import {
	MdOutlineAccountCircle,
	MdOutlineChromeReaderMode,
	MdOutlineCircleNotifications,
	MdOutlineClosedCaption,
	MdOutlineLogout,
	MdOutlinePassword,
	MdOutlinePsychology,
	MdOutlineScore,
	MdPerson3,
} from 'react-icons/md';

var sidebar = {
	main: {
		title: '主功能',
		icon: <MdOutlinePsychology />,
		items: [
			{
				title: '个人信息',
				icon: <MdPerson3 />,
				link: '/dashboard/main/info',
			},
			{
				title: '站内短信',
				icon: <TiMessages />,
				link: '/dashboard/main/message',
			},
			{
				title: '我的收藏',
				icon: <IoSchoolOutline />,
				link: '/dashboard/main/favorite',
			},
			{
				title: '我的积分',
				icon: <MdOutlineScore />,
				link: '/dashboard/main/score',
			},
		],
	},
	history: {
		title: '历史记录',
		icon: <GoHistory />,
		items: [
			{
				title: '学习记录',
				icon: <MdOutlineClosedCaption />,
				link: '/dashboard/history/process',
			},
			{
				title: '习题记录',
				icon: <MdOutlineChromeReaderMode />,
				link: '/dashboard/history/testing',
			},
			{
				title: '我的反馈',
				icon: <MdOutlineCircleNotifications />,
				link: '/dashboard/history/feeback',
			},
		],
	},
	signOut: {
		title: '账户',
		icon: <MdOutlineAccountCircle />,
		items: [
			{
				title: '修改密码',
				icon: <MdOutlinePassword />,
			},
			{
				title: '退出',
				icon: <MdOutlineLogout />,
			},
		],
	},
};

export default sidebar;

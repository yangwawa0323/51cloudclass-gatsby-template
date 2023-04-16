/** @format */

import { Box, Typography, Button } from '@mui/material';
import { decodeToken } from 'react-jwt';
import { useNavigate, useLocation } from 'react-router';
import { useAuthenticate } from '../hooks';
import {
	cleanTokenEtag,
	debugLog,
	getAxios,
	getTokenEtag,
} from '51cloudclass-utilities/utils';
import NoEntryImage from '../assets/images/auth/no_entry.jpg';
import { grey } from '@mui/material/colors';
import { toast } from 'react-toastify';
import { dispatch } from '../store';
import { login } from '../store/reducers/authSlice';

// TODO: set the `url` to the valdateToken route
const url = '';
const axiosInstance = getAxios();

export const validateToken = async (token) => {
	return new Promise((resolve, reject) => {
		try {
			const response = axiosInstance.option(url);
			if (response.status === 200) {
				const data = response.data;
				resolve(true);
			}
			reject(false);
		} catch (e) {
			debugLog(e);
			reject(false);
		}
	});
};

export const setAuthToken = (token, etag) => {
	if (token) {
		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		axiosInstance.defaults.headers.common['Etag'] = etag;
	} else {
		delete axiosInstance.defaults.headers.common['Authorization'];
		delete axiosInstance.defaults.headers.common['Etag'];
	}
};

export const handleLogin = async (formData, callback) => {
	try {
		const response = await axiosInstance.post(
			process.env.REACT_APP_LOGIN_URL,
			formData
		);
		if (response.status === 200) {
			const data = await response.data;
			debugLog('AuthLogin response data', data);
			const { token, etag } = data;
			// 1. save
			localStorage.setItem('token', token);
			localStorage.setItem('etag', etag);

			// 2. set axios options install globally.
			setAuthToken(token, etag);
			// 3. redux dispatch
			dispatch(login());

			// 4. callback function
			callback();
		}
	} catch (e) {
		debugLog('login problem', e);
		toast('Wow 有什么不对劲!');
	}
};

// eslint-disable-next-line react/prop-types
export const RequiredPermission = ({ children }) => {
	const location = useLocation();
	const navigator = useNavigate();
	const { pathname } = location;
	const [token, _] = getTokenEtag();
	const { username } = decodeToken(token);
	const data = useAuthenticate(username);

	const filteredPolicies = data?.result?.policies?.filter((p) => {
		const regex = new RegExp(p.obj.replace('*', '.*'));
		const matched = regex.test(pathname);
		// debugLog(
		//     'regex matched: ',
		//     matched,
		//     p.sub,
		//     ' == ',
		//     username,
		//     ':',
		//     p.sub == username,
		//     ', ',
		//     p.obj,
		//     ' == ',
		//     pathname,
		//     ':',
		//     p.obj == pathname
		// );
		return p.sub == username && (matched || p.obj == pathname);
	});
	return filteredPolicies?.length > 0 ? (
		<Box>{children}</Box>
	) : (
		<Box
			display='flex'
			height='100vh'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
		>
			<Box>
				<Typography
					variant='h3'
					color={grey[600]}
				>
					你好!{username},你的账户没有权限访问
				</Typography>
			</Box>
			<img
				style={{ opacity: 0.7 }}
				src={NoEntryImage}
				alt='没有权限'
			/>
			<Box
				gap={3}
				display='flex'
			>
				<Button
					variant='outlined'
					onClick={() => navigator(-1)}
				>
					返回
				</Button>
				<Button
					variant='contained'
					onClick={() => {
						cleanTokenEtag();
						navigator('/login');
					}}
				>
					退出
				</Button>
			</Box>
		</Box>
	);
};

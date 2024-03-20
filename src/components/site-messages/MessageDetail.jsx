/*****************************
 * This page is message detail which including <UserListCard />
 */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import {
	Card,
	Box,
	IconButton,
	Input,
	FormControl,
	Typography,
	Snackbar,
	Alert,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import { SendOutlined } from '@ant-design/icons';
import 'simplebar-react/dist/simplebar.min.css';

import SimpleBarScroll from '../common/SimpleBar';
import { useRef } from 'react';
import MessageSender from './MessageSender';
import MessageISent from './MessageISent';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { debugLog, getAxios } from '51cloudclass-utilities/src/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from 'react';
import { useGlobalContext } from '../../../wrap-with-provider';
import Loading from '../Loading';
import { useEffect } from 'react';
import { decryptJWE2JSON } from '../../utils/jwe-decrypt';

const axiosInstance = getAxios();

/*****************************************************************
 * 1. Get current user info
 * 2. if message.sender_id is my current user id, use <MessageISent />
 *  and flex at end
 * 3. if message.recipient_id is my curren user id, use <MessageSender />
 * and flex at start
 *****************************************************************/

const MessageDetail = (props) => {
	const [message, setMessage] = useState('');
	const inputRef = useRef(null);
	// get context friendId
	const { friendId, setMessageData } = useStateContext();
	const { me } = useGlobalContext();
	const [alert, setAlert] = useState(false);

	const queryClient = useQueryClient();
	const theme = useTheme();
	const matchDownSM = useMediaQuery('(max-width:380px)');

	const fetchSessionMessage = async (id) => {
		const axiosInstance = getAxios();
		if (id !== 0) {
			let url = `${process.env.GATSBY_API_SERVER}/messages/session-from-friend/${id}`;
			return await axiosInstance
				.get(url)
				.then((response) => {
					return decryptJWE2JSON(response.data.result.encrypted);
				})
				.then((json) => {
					setMessageData((prev) => {
						return {
							result: { ...prev.result, ...json.result },
						};
					});
					return json;
				});
		}
		return Promise.reject('friend ID is undefined');
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['fetch-session-messages', friendId],
		queryFn: () => fetchSessionMessage(friendId),
	});

	const mutation = useMutation({
		mutationFn: (data) => {
			const url = `${process.env.GATSBY_API_SERVER}/messages/`;
			return axiosInstance.post(url, data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['fetch-session-messages', friendId],
			});
		},
		onError: (error) => {
			if (
				error.response.data.code === 400 &&
				/has no/.test(error.response.data.message)
			) {
				setAlert(true);
			}
		},
	});

	if (isLoading) return <Loading />;
	if (isError)
		return (
			<div>
				<Typography variant='caption'>无短信息</Typography>
			</div>
		);

	const { status } = props;

	const handleChange = (event) => {
		setMessage((prev) => event.target.value);
	};

	const sendMessage = () => {
		let data = {
			content: message,
			sender_id: me.userId,
			recipient_id: friendId,
			status: 2, // be default message is unreaded
		};
		if (/^\s*$/.test(message.trim())) return;
		mutation.mutate(data);
	};

	return (
		<Card
			variant='outlined'
			sx={{
				position: 'relative',
				border: 'unset',
				width: 'calc(100% - 220px)',
				minWidth: '340px',
				pt: '24px',
			}}
		>
			<Box
				borderRadius='12px'
				sx={{
					py: '40px',
					px: '20px',
				}}
			>
				<SimpleBarScroll style={{ height: matchDownSM ? '40vh' : '70vh' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
						{/* <pre>{JSON.stringify(data.result.messages, null, 4)}</pre> */}
						{friendId &&
							data.code === 200 &&
							data.result.messages.map((msg, idx) => {
								return msg.sender_id === friendId ? (
									<MessageSender
										key={idx}
										message={msg}
									/>
								) : (
									<MessageISent
										key={idx}
										message={msg}
									/>
								);
							})}
					</Box>
				</SimpleBarScroll>
			</Box>
			<Box
				sx={{
					px: '12px',
					mx: '24px',
					// height: '40px',
					bottom: 0,
					position: 'fixed',
					maxWidth: '560px',
					width: '40%',
					minWidth: '220px',
				}}
			>
				<FormControl
					fullWidth
					sx={{ m: 1 }}
				>
					<Input
						inputRef={inputRef}
						placeholder='填写你的短信息(51个字)'
						multiline
						minRows={1}
						onChange={handleChange}
						endAdornment={
							<IconButton
								onClick={sendMessage}
								color='primary'
							>
								<SendOutlined />
							</IconButton>
						}
					/>
				</FormControl>
			</Box>
			<Snackbar
				open={alert}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={4000}
				onClose={() => setAlert(false)}
			>
				<Alert
					variant='filled'
					severity='warning'
				>
					你还没有添加对方为好友，请在好友头像上点击右键
				</Alert>
			</Snackbar>
		</Card>
	);
};

export default MessageDetail;

/*****************************
 * This page is message detail which including <UserListCard />
 */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Box, IconButton, Input, FormControl } from '@mui/material';
import {
	PaperClipOutlined,
	PictureOutlined,
	SoundOutlined,
	SendOutlined,
} from '@ant-design/icons';
import { flexStart } from '../utils/StyledMain';
import 'simplebar-react/dist/simplebar.min.css';

import { grey } from '@mui/material/colors';

import SimpleBarScroll from '../common/SimpleBar';
import { useRef } from 'react';
import MessageSender from './MessageSender';
import MessageISent from './MessageISent';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { debugLog, getAxios } from '51cloudclass-utilities/src/utils';
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from 'react';
import { useGlobalContext } from '../../../wrap-with-provider';

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

	const queryClient = useQueryClient();

	const fetchSessionMessage = async (id) => {
		const axiosInstance = getAxios();
		if (id !== 0) {
			let url = `${process.env.GATSBY_API_SERVER}/messages/session-from-friend/${id}`;
			return await axiosInstance.get(url).then((response) => {
				setMessageData((prev) => {
					return {
						result: { ...prev.result, ...response.data.result },
					};
				});
				return response.data;
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
	});

	if (isLoading) return <div>loading message detail...</div>;
	if (isError) return <div>Error occurred at message detail ...</div>;

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
		debugLog('post to server: ', data);
		/*************
		 *
		 */
		mutation.mutate(data);
	};

	return (
		<Card
			variant='outlined'
			sx={{
				position: 'relative',
				border: 'unset',
				width: status ? '100%' : 'calc(100% + 320px)',
				pt: '24px',
			}}
		>
			<Box
				borderRadius='12px'
				sx={{
					py: '40px',
					px: '20px',
					height: 'calc(80vh - 40px)',
				}}
			>
				<SimpleBarScroll style={{ maxHeight: '100%', mr: '-160px' }}>
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
					/>
				</FormControl>
				<Box sx={{ ...flexStart, mb: '12px', justifyContent: 'space-between' }}>
					<Box>
						<IconButton sx={{ color: grey[400] }}>
							<PaperClipOutlined />
						</IconButton>
						<IconButton sx={{ color: grey[400] }}>
							<PictureOutlined />
						</IconButton>
						<IconButton sx={{ color: grey[400] }}>
							<SoundOutlined />
						</IconButton>
					</Box>
					<Box>
						<IconButton
							onClick={sendMessage}
							color='primary'
						>
							<SendOutlined />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export default MessageDetail;

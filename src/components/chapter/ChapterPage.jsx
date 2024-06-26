import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Frame from '../frame';
import { graphql } from 'gatsby';
import { useSaveBrowerHistory } from '../../../src/hooks';
import { getAxios } from '../../utilities/utils';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
	Alert,
	Avatar,
	Box,
	Button,
	Container,
	Drawer,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Tooltip,
	Typography,
} from '@mui/material';
import { useGlobalContext } from '../../../wrap-with-provider';
import { AiOutlineSend as SendOutlined } from 'react-icons/ai';
import { useState } from 'react';
import SEO from '../seo';
import Loading from '../Loading';
import ChapterList from './ChapterList';
import Feedback from '../feedback/Feedback';
import { useMySnackbar } from '../utils/Snackbar';
import { decryptJWE2JSON } from '../../utils/jwe-decrypt';

const axiosInstance = getAxios();

export const query = graphql`
	query MyQuery($uuid: String) {
		chapter(id: { eq: $uuid }) {
			UpdatedAt
			id
			mark
			name
			online_running_code
			order_index
			row_count
			course_id
			content
			course {
				id
				name
				chapters {
					name
					id
					order_index
				}
			}
			CreatedAt
		}
	}
`;

const ChapterPage = (props) => {
	const { data, path } = props;

	const { setOpen, setAlertMessage, snackbar } = useMySnackbar();
	const { me, clickedFriend, setClickedFriend, setChapter, setChapters } =
		useGlobalContext();
	const [joinMessage, setJoinMessage] = useState();

	/*********************************************************************
	 * Content     string        `json:"content" uri:"content"`
	 * PostTime    *time.Time    `json:"post_time,omitempty"`
	 * SenderID    int           `json:"sender_id" uri:"sender_id,omitempty"`
	 * RecipientID int           `json:"recipient_id" uri:"recipient_id"`
	 * Status      MessageStatus
	 */
	const postJoinMessage = () => {
		let url = `${process.env.GATSBY_API_SERVER}/messages/friend-join`;
		axiosInstance.post(url, joinMessage).catch((err) => {
			setAlertMessage('你已经发送添加好友短信，请等待对方确认');
			setOpen(true);
		});
		setClickedFriend(null);
	};

	const handleChange = (event) => {
		/********************************************************************
		 * <FormControlLable /> render the element, you have to access the
		 * parent node's next sibling element.
		 */
		const message = event.target.parentNode.nextElementSibling.textContent;
		const data = {
			sender_id: me.userId,
			recipient_id: clickedFriend.ID,
			content: message,
			status: 128,
		};
		setJoinMessage(data);
	};

	const sendJoinMessage = (event) => {
		postJoinMessage();
	};

	/*******************************************************************
	 * current chapter and relative chapters all are retrieved from
	 * GraphQL query.
	 */
	useEffect(() => {
		setChapter(data.chapter);
		setChapters(data.chapter?.course?.chapters);
	}, []);
	/******************************************************************
	 * Golang service side should by pass the OPTION request,
	 * otherwise we need remove the last splash.
	 */
	const uuid = path.replace(/(\/[^/]*\/)?/, '').replace('/', '');

	const fetchChapterViewers = async () => {
		const axiosInstance = getAxios();
		let url = `${process.env.GATSBY_API_SERVER}/chapters/viewers/${uuid}`;
		return axiosInstance
			.get(url)
			.then((response) => decryptJWE2JSON(response.data.result.encrypted));
	};

	const { data: viewers, isLoading } = useQuery({
		queryKey: ['fetch-chapter-viewers', uuid],
		queryFn: fetchChapterViewers,
	});

	let { setData } = useSaveBrowerHistory();

	useEffect(() => {
		setData({
			path: path,
			title: data.chapter.name,
		});
	}, []);

	if (isLoading) return <Loading />;

	return (
		<Frame>
			<div className='mb-16 px-2 md:px-12'>
				<div className='mx-0 md:mx-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8'>
					<div className='col-span-1 sm:col-span-1 md:col-span-2'>
						<LeftPane />

						<Box sx={{ p: 4 }}>
							<Box sx={{ mb: 2 }}>
								<Typography
									variant='h6'
									color='gray'
									fontWeight={600}
								>
									学习本章节的云同学
								</Typography>
							</Box>
							<Box
								display='flex'
								gap='2'
							>
								{viewers.result.users.map((user) => (
									<Tooltip
										key={user.ID}
										title={`点击 ${user.name} 添加好友`}
									>
										<Avatar
											onClick={() => {
												setClickedFriend(user);
											}}
											sx={{ width: 48, height: 48 }}
											src={user.avatar_url}
										></Avatar>
									</Tooltip>
								))}
								{clickedFriend && (
									<Drawer
										anchor='right'
										open={Boolean(clickedFriend)}
										onClose={() => setClickedFriend(null)}
									>
										<Container
											sx={{
												minWidth: '320px',

												height: '100vh',
											}}
										>
											<Box
												mt='80px'
												gap='24px'
												display='flex'
												flexDirection='column'
												justifyContent='center'
												alignItems='center'
												maxWidth='320px'
											>
												<Typography variant='h6'>
													添加云同学 {clickedFriend?.name} 为好友
												</Typography>
												<Avatar
													sx={{ width: 64, height: 64 }}
													src={clickedFriend.avatar_url}
												/>
												<FormControl>
													<FormLabel id='demo-radio-buttons-group-label'>
														打招呼
													</FormLabel>
													<RadioGroup
														aria-labelledby='demo-radio-buttons-group-label'
														defaultValue='joinMsg1'
														name='radio-buttons-group'
														onChange={handleChange}
													>
														<FormControlLabel
															value='joinMsg1'
															control={<Radio />}
															label='YYDS，可以问你一个问题吗'
														/>
														<FormControlLabel
															value='joinMsg2'
															control={<Radio />}
															label='Good Good Study, Day Day Up together'
														/>
														<FormControlLabel
															value='joinMsg3'
															control={<Radio />}
															label='How old are you? 怎么老是你？'
														/>
														<FormControlLabel
															value='joinMsg4'
															control={<Radio />}
															label='嘿！云同学，加你为好友一起学习进步好吗？'
														/>
													</RadioGroup>
												</FormControl>
												<Button
													sx={{ width: '80px' }}
													variant='outlined'
													size='small'
													endIcon={<SendOutlined />}
													onClick={sendJoinMessage}
												>
													发送
												</Button>
											</Box>
										</Container>
									</Drawer>
								)}
							</Box>
						</Box>
					</div>
					<div className='col-span-1'>
						<ChapterList />
					</div>
				</div>

				<div>
					<Feedback
						// toolbarHidden
						toolbarClassName='!bg-transparent'
						editorClassName='shadow bg-white rounded-lg border-2 min-h-40 px-2 py-0'
					/>
				</div>
				{snackbar}
			</div>
		</Frame>
	);
};

export default ChapterPage;

export const Head = ({ pageContext }) => <SEO title={pageContext.title} />;

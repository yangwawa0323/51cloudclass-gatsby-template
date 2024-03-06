import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
	Avatar,
	Container,
} from '@mui/material';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { debugLog, getAxios } from '51cloudclass-utilities/src/utils';
import { useGlobalContext } from '../../../wrap-with-provider';
import { useMySnackbar } from '../utils/Snackbar';
// import { lazy } from 'react';
import { Suspense } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

// const Editor = lazy(() => import('./intermedia'));

const Feedback = (props) => {
	const axiosInstance = getAxios();
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [previewMode, setPreviewMode] = useState(false);
	const { me, isLogin } = useGlobalContext();
	const [count, setCount] = useState(140);

	const { setOpen, setAlertMessage, snackbar } = useMySnackbar();
	const editRef = useRef();

	const counter = useCallback(
		() => (
			<Typography
				variant='caption'
				className='absolute ml-4 bottom-0 text-gray-300 translate-y-6'
			>
				剩余:{count}
			</Typography>
		),
		[count]
	);

	const submitFeedback = async () => {
		let url = `${process.env.GATSBY_API_SERVER}/feedback/`;
		const data = {
			plain_content: displayContent(),
			draft_content: JSON.stringify(editorState),
			user_id: me.userId,
		};
		axiosInstance
			.post(url, data)
			.then((response) => {
				if (response.status === 200) {
					setAlertMessage('感谢你的反馈和建议');
					setOpen(true);
					setEditorState(EditorState.createEmpty());
					setCount(140);
				}
			})
			.catch((error) => {
				if (error.response.status === 401) {
					setAlertMessage('抱歉，你还没有登录！');
					setOpen(true);
				} else {
					setAlertMessage('抱歉，网络可能出现错误，请稍后再试！');
					setOpen(true);
				}
			});
	};

	const handleEditorStateChange = (state) => {
		setEditorState(state);
		setCount((prev) => 140 - displayContent().length);
	};

	const setEditorReference = (ref) => {
		editRef.current = ref;
	};

	const removeHTMLTag = useCallback((content) => {
		return content.replace(/(<([^>]+)>)/gi, '');
	});

	const displayContent = useCallback(() => {
		debugLog('displayContent:', editorState.getCurrentContent());
		const content = convertToRaw(editorState.getCurrentContent());
		return removeHTMLTag(content.blocks?.map((b) => b.text).join(' '));
	}, [editorState]);

	return (
		<Suspense fallback={<div>Loading</div>}>
			<Container>
				{/* 
				<Editor
					{...props}
					toolbar={{ ...toolbar, ...props?.tools }}
					localization={{ locale: 'zh' }}
					onContentStateChange={handleEditorStateChange}
					editorRef={setEditorReference}
					contentState={editorState}
					// initialContentState={editorState}
				/> */}
				<Card
					sx={{ maxWidth: '460px' }}
					variant='linear'
				>
					<CardHeader
						sx={{ background: 'indigo', height: '30px', padding: '6px 12px' }}
						title={
							<Typography
								sx={{ fontSize: 14 }}
								color='palette.blueGrey.300'
								gutterBottom
							>
								感谢你的反馈和建议
							</Typography>
						}
					/>
					<CardContent
						sx={{
							minWidth: '360px',
							minHeight: '160px',
							display: 'flex',
							justifyContent: 'start',
							gap: 2,
							position: 'relative',
						}}
					>
						<Box
							sx={{
								border: '2px solid white',
								borderRadius: '50%',
								width: 'fit-content',
								height: 'fit-content',
							}}
						>
							<Avatar
								sx={{
									border: '1px solid  #1976d2',
									width: '48px',
									height: '48px',
								}}
								src='https://mui.com/static/images/avatar/2.jpg'
								alt='feedback'
							></Avatar>
						</Box>

						<Editor
							editorState={editorState}
							onChange={handleEditorStateChange}
							placeholder='请输入内容'
						/>
						{counter()}
					</CardContent>
					<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
						<Button
							variant='contained'
							color='primary'
							size='extrasmall'
							onClick={submitFeedback}
						>
							提交
						</Button>
						<Button
							variant='contained'
							color='info'
							size='extrasmall'
							onClick={() => setPreviewMode((prev) => !prev)}
						>
							预览
						</Button>
					</CardActions>
				</Card>
				{previewMode && <p>{displayContent()}</p>}
				{snackbar}
			</Container>
		</Suspense>
	);
};

/* const toolbar = {
	options: ['inline', 'fontSize', 'emoji', , 'history'],
	inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
};
 */
export default Feedback;

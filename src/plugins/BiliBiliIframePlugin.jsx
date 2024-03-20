import React from 'react';
import Iframe from 'react-iframe';
import { Box, Container, Typography } from '@mui/material';

const extractIframeSrc = (code) => {
	var url = '';
	/*************************************
	 * Only accept bilibili iframe
	 */
	const regex = /(?<=src=")(.*?)(?=")/gm;
	if (/player\.bilibili\.com/.test(code)) {
		const matched = code.match(regex);
		url = matched.length > 0 ? matched[0] : '';
	}
	return url;
};

const BiliBiliIframePlugin = {
	Renderer: ({ data }) => {
		var url;
		if (data.iframe_code) {
			url = extractIframeSrc(data.iframe_code);
		}
		return url !== '' ? (
			<Container sx={{ py: '80px' }}>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography variant='h6'>
						童鞋们，你也可以访问B站上本视频资源，你可以开启AI中文字幕哟
					</Typography>
					<Typography variant='caption'>
						记得回到云课堂按章节次序学习，不要别分心哟，good good study, day day
						up!
					</Typography>
					<Iframe
						url={url}
						width='640px'
						height='320px'
						id=''
						className=''
						display='block'
						position='relative'
					/>
				</Box>
			</Container>
		) : (
			<div>Only support bilibili iframe</div>
		);
	},
	id: 'BiliBiliIframePlugin',
	title: 'Bilibli Iframe',
	description: 'Use bilibili shared video iframe',
	version: 1,
	controls: {
		type: 'autoform',
		schema: {
			properties: {
				iframe_code: {
					type: 'string',
				},
			},
			required: ['iframe_code'],
		},
	},
};

export default BiliBiliIframePlugin;

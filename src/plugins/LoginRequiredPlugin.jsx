import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { navigate } from 'gatsby';

const LoginRequiredPlugin = {
	Renderer: () => (
		<Container>
			<Box
				flexDirection='column'
				gap='20px'
				display='flex'
				justifyContent='center'
				alignItems='center'
				py='40px'
			>
				<Typography variant='h6'>童鞋，登录后才可以看视频学习哟！</Typography>
				<Button
					variant='outlined'
					onClick={() => navigate('/login')}
				>
					登录
				</Button>
				<Typography variant='body1'>
					51元包月学习，1500+ 高质量视频，助你就业。
				</Typography>
			</Box>
		</Container>
	),
	id: 'loginRequiredCellPlugin',
	title: 'Login required cell plugin',
	version: 1,
	description: 'Login require cell plugin',
};

export default LoginRequiredPlugin;

import {
	Avatar,
	Card,
	CardContent,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';
import { flexEnd } from '../utils/StyledMain';
import { MoreOutlined } from '@mui/icons-material';
import { EditOutlined } from '@mui/icons-material';
import momentAgo from 'moment-ago';

const MessageISent = ({ message }) => {
	return (
		<Grid
			container
			sx={{ ...flexEnd, gap: '12px' }}
		>
			<Grid
				item
				xs={2}
				xl={4}
			></Grid>
			<Grid
				item
				xs={10}
				xl={8}
				sx={{ ...flexEnd, gap: '12px' }}
			>
				<Grid container>
					<Grid
						item
						xs={12}
						sx={{ ...flexEnd }}
					>
						<IconButton>
							<MoreOutlined />
						</IconButton>
						<IconButton>
							<EditOutlined />
						</IconButton>
						<Card
							variant='outlined'
							sx={{ color: 'white', bgcolor: 'rgb(24, 144, 255)' }}
						>
							<CardContent
								sx={{
									p: '8px',
									'&:last-child': {
										p: '8px',
									},
								}}
							>
								<Grid container>
									<Grid item>
										<Typography>{message.content}</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ ...flexEnd, gap: '12px' }}
					>
						<Typography
							variant='subtitle2'
							color='gray'
						>
							{momentAgo(new Date(message.CreatedAt)).ago()}
						</Typography>
					</Grid>
				</Grid>
				<Avatar src={message.sender.avatar_url} />
			</Grid>
		</Grid>
	);
};

export default MessageISent;

import { Avatar } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import { flexStart } from '../utils/StyledMain';
import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { debugLog } from '51cloudclass-utilities/src/utils';
import momentAgo from 'moment-ago';

const MessageSender = ({ message }) => {
	const context = useStateContext();
	return (
		<Grid
			container
			sx={{ ...flexStart, flexDirection: 'row', gap: '12px' }}
		>
			<Grid
				item
				ml={3}
			>
				<Avatar src={message.sender.avatar_url} />
			</Grid>
			<Grid
				item
				xs={10}
				xl={8}
				sx={{ ...flexStart, gap: '12px' }}
			>
				<Grid
					container
					pl={{ xs: '24px', md: '8px' }}
				>
					<Grid
						item
						xs={12}
						sx={{ ...flexStart }}
					>
						<Card
							variant='outlined'
							color='secondary'
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
						sx={{ ...flexStart, gap: '12px' }}
					>
						<Typography
							variant='subtitle2'
							color='gray'
						>
							{momentAgo(new Date(message.CreatedAt)).ago()}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MessageSender;

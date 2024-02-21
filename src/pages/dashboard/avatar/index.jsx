import React from 'react';
import AvataaarOptions from '../../../components/avataaars/config';
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Tab,
} from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { debugLog } from '51cloudclass-utilities/src/utils';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import Avatar from 'avataaars';
import { useGlobalContext } from '../../../../wrap-with-provider';
import { useState } from 'react';

const UserAvatar = () => {
	const options = Object.keys(AvataaarOptions);
	const { avattributes, setAavattributes } = useGlobalContext();
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<DashboardLayout>
			<Box
				display='flex'
				justifyContent='center'
				gap={4}
			>
				<Box>
					<Avatar
						value={avattributes}
						onChange={setAavattributes}
					/>
				</Box>
				<Box
					display='flex'
					flexDirection='column'
					gap={2}
				>
					<Box
						sx={{
							flexGrow: 1,
							maxWidth: { xs: 320, sm: 480 },
							bgcolor: 'background.paper',
						}}
					>
						<Tabs
							value={value}
							onChange={handleChange}
							variant='scrollable'
							orientation='vertical'
							scrollButtons
							sx={{
								height: '480px',
								[`& .${tabsClasses.scrollButtons}`]: {
									'&.Mui-disabled': { opacity: 0.3 },
								},
							}}
						>
							{options.map((opt, idx) => {
								const option = AvataaarOptions[opt];
								return (
									<Tab
										key={idx}
										label={option.label}
									/>
								);
							})}
						</Tabs>
					</Box>
					{options.map((opt, idx) => {
						const option = AvataaarOptions[opt];
						return <></>;
					})}
				</Box>
			</Box>
		</DashboardLayout>
	);
};

export default UserAvatar;

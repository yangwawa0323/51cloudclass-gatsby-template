import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const MySnackbar = ({ message, open, onClose }) => {
	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			autoHideDuration={4000}
			onClose={onClose}
		>
			<Alert
				variant='filled'
				severity='warning'
			>
				{message}
				{/* 你已经发送添加好友短信，请等待对方确认 */}
			</Alert>
		</Snackbar>
	);
};

export const useMySnackbar = () => {
	const [open, setOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');

	const snackbar = useMemo(() => (
		<MySnackbar
			message={alertMessage}
			open={open}
			onClose={() => setOpen(false)}
		/>
	));

	return { setOpen, setAlertMessage, snackbar };
};

export default MySnackbar;

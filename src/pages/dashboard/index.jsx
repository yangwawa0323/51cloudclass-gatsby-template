import React from 'react';
import { StateContextProvider } from '../../contexts/ContextProvider';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { needLoginWrapper } from '../../hooks';

const DashboardIndex = () => {
	return (
		<StateContextProvider>
			<DashboardLayout />
		</StateContextProvider>
	);
};

export default needLoginWrapper(DashboardIndex);

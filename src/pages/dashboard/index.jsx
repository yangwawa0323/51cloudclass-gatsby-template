import React from 'react';
import { StateContextProvider } from '../../contexts/ContextProvider';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const DashboardIndex = () => {
	return (
		<StateContextProvider>
			<DashboardLayout />
		</StateContextProvider>
	);
};

export default DashboardIndex;

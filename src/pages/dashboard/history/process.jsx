import React from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import HistoryTable from '../../../components/dashboard/history/HistoryTable';

const LearningProcess = () => {
	return (
		<DashboardLayout>
			<HistoryTable />
		</DashboardLayout>
	);
};

export default LearningProcess;

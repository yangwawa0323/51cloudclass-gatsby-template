import React from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import HistoryTable from '../../../components/dashboard/history/HistoryTable';

const HistoryRecord = () => {
	return (
		<DashboardLayout>
			<HistoryTable />
		</DashboardLayout>
	);
};

export default HistoryRecord;

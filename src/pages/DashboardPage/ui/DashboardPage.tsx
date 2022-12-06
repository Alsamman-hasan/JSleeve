import { memo } from 'react';
import {
	DashboardCards,
	DashboardCharts,
	DashboardTables,
} from '@/entities/Dashboard';
import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';

export const DashboardPage = memo(() => {
	return (
		<PageLayout gap={1.75}>
			<DashboardCards />
			<DashboardCharts />
			<DashboardTables />
		</PageLayout>
	);
});
export default DashboardPage;

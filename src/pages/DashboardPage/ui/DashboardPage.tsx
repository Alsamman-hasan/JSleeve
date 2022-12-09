import { memo } from 'react';
import {
	DashboardCards,
	DashboardCharts,
	DashboardTables,
} from '@/entities/Dashboard';
import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import cls from './DashboardPage.module.scss';

export const DashboardPage = memo(() => {
	return (
		<PageLayout className={cls.dashboardPage} gap={1.75}>
			<DashboardCards />
			<DashboardCharts />
			<DashboardTables />
		</PageLayout>
	);
});
export default DashboardPage;

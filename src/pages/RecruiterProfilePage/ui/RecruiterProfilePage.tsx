import { memo } from 'react';
import cls from './RecruiterProfilePage.module.scss';
import { RecruiterProfile } from '@/entities/RecruiterProfile';
import { PageLayout } from '@/widgets/PageLayout/PageLayout';

export const RecruiterProfilePage = memo(() => {
	return (
		<PageLayout className={cls.dashboardPage} gap={1.75}>
			<RecruiterProfile />
		</PageLayout>
	);
});
export default RecruiterProfilePage;

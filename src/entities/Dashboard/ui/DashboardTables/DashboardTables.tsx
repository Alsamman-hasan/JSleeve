import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DashboardTables.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { VStack } from '@/shared/ui/Stack';
import { TableUi } from '../TableUi/TableUi';

export interface DashboardTablesProps {
	className?: string;
}
export const DashboardTables = memo((props: DashboardTablesProps) => {
	const { className } = props;
	return (
		<Layout className={classNames(cls.DashboardTables, {}, [className])}>
			<VStack max>
				<TableUi />
			</VStack>
		</Layout>
	);
});

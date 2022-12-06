import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DashboardTables.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface DashboardTablesProps {
	className?: string;
}
export const DashboardTables = memo((props: DashboardTablesProps) => {
	const { className } = props;
	return (
		<Layout className={classNames(cls.DashboardTables, {}, [className])}>
			<VStack max>
				<HStack>
					<div>test</div>
				</HStack>
			</VStack>
		</Layout>
	);
});

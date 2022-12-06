import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DashboardCharts.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack } from '@/shared/ui/Stack';

export interface DashboardChartsProps {
	className?: string;
}
export const DashboardCharts = memo((props: DashboardChartsProps) => {
	const { className } = props;
	return (
		<HStack
			align="center"
			justify="between"
			gap={1.75}
			max
			className={classNames(cls.DashboardCharts, {}, [className])}
		>
			<Layout className={cls.layout}>test</Layout>
			<Layout className={cls.layout}>test</Layout>
		</HStack>
	);
});

import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DashboardCharts.module.scss';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { USAMap } from '@/widgets/USA-map/USA-map';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Chart } from './Chart';

export interface DashboardChartsProps {
	className?: string;
}
export const DashboardCharts = memo((props: DashboardChartsProps) => {
	const { className } = props;
	const recruitsCount = useMemo(() => {
		return [
			{ count: 900, color: '#93000A' },
			{ count: 800, color: '#BA1A1A' },
			{ count: 700, color: '#DE3730' },
			{ count: 600, color: '#FF5449' },
			{ count: 500, color: '#FF897D' },
			{ count: 400, color: '#FFB4AB' },
			{ count: 300, color: '#FFDAD6' },
			{ count: 200, color: '#FFEDEA' },
			{ count: 100, color: '#FFFBFF' },
		];
	}, []);

	return (
		<HStack
			align="center"
			justify="between"
			gap={1.75}
			max
			className={classNames(cls.DashboardCharts, {}, [className])}
		>
			<Layout className={classNames(cls.layout, {}, [cls.map])}>
				<VStack gap={1.125} justify="between">
					<Htag tage="h3" className={cls.header}>
						Number of Recruits By State
					</Htag>
					<USAMap />
					<HStack gap={0.8125} justify="center" align="center" max>
						{recruitsCount.map((item) => (
							<HStack key={item.count} gap={0.25} max>
								<span className={cls.span} style={{ background: item.color }} />
								<PTag tage="12Reg">{item.count}</PTag>
							</HStack>
						))}
					</HStack>
				</VStack>
			</Layout>
			<Layout className={classNames(cls.layout, {}, [cls.chart])}>
				<Chart />
			</Layout>
		</HStack>
	);
});

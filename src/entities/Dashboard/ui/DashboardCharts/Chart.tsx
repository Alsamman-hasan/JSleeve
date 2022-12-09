import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import {
	Props as LegendProps,
	Payload,
} from 'recharts/types/component/DefaultLegendContent';
import { memo, useMemo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { data } from './Data';
import cls from './DashboardCharts.module.scss';
import { PTag } from '@/shared/ui/Paragraph/P';

type Colors = Record<string, string>;

export const Chart = memo(() => {
	const ChartItems = useMemo(() => {
		return data;
	}, []);

	const ChartItemsColors: Colors = useMemo(() => {
		return {
			'13 years': '#5A65C5',
			'14 years': '#D45F93',
			'15 years': '#FFC144',
			'16 years': '#7BC377',
			'18 years': '#DC6E6F',
		};
	}, []);

	const renderLegend = ({ payload }: LegendProps) => {
		return (
			<HStack gap={1.25} justify="center">
				<PTag tage="14SemiBold">Recruits By Age </PTag>
				<PTag tage="12Reg" className={cls.divider}>
					|
				</PTag>
				{payload?.map((entry: Payload, index: number) => (
					<HStack key={`item-${index}`} gap={0.25} className={cls.lengedItem}>
						<span className={cls.span} style={{ background: entry.color }} />
						<PTag tage="12Reg">{entry.value}</PTag>
					</HStack>
				))}
			</HStack>
		);
	};
	return (
		<LineChart
			width={620}
			height={292}
			data={data}
			margin={{
				left: 0,
				bottom: 0,
			}}
		>
			<CartesianGrid strokeDasharray="1" strokeWidth="1" vertical={false} />
			<XAxis dataKey="name" />
			<YAxis width={50} axisLine={false} />
			<Legend verticalAlign="top" height={66} content={renderLegend} />
			{ChartItems.map((line, index) => {
				const lineKeys = Object.keys(line).filter((x) => x !== 'name');
				const dataKey: string = lineKeys[index];
				return (
					<Line
						key={index}
						dot={false}
						type="monotone"
						dataKey={dataKey}
						stroke={ChartItemsColors[dataKey]}
						strokeWidth="3"
					/>
				);
			})}
		</LineChart>
	);
});

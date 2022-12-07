import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { HStack } from '@/shared/ui/Stack';
import { data } from './Data';
import cls from './DashboardCharts.module.scss';
import { PTag } from '@/shared/ui/Paragraph/P';

export const Chart = () => {
	const renderLegend = ({ payload }: any) => {
		return (
			<HStack gap={0.25} style={{ width: '100%', left: '0px' }} justify="end">
				{payload.map((entry: any, index: number) => (
					<HStack key={`item-${index}`} gap={0.25} max>
						<span className={cls.span} style={{ background: entry.color }} />
						<PTag tage="12Reg">{entry.value}</PTag>
					</HStack>
				))}
			</HStack>
		);
	};
	return (
		<LineChart
			width={560}
			height={300}
			data={data}
			margin={{
				left: 0,
				bottom: 0,
			}}
		>
			<CartesianGrid strokeDasharray="1" strokeWidth="1" vertical={false} />
			<XAxis dataKey="name" />

			<YAxis axisLine={false} />
			{/* <Tooltip /> */}
			<Legend
				verticalAlign="top"
				height={36}
				width={500}
				content={renderLegend}
			/>
			<Line
				dot={false}
				type="monotone"
				dataKey="towptAtt"
				stroke="#5A65C5"
				strokeWidth="3"
			/>
			<Line
				dot={false}
				type="monotone"
				dataKey="towptMade"
				stroke="#D45F93"
				strokeWidth="3"
			/>
			<Line
				dot={false}
				type="monotone"
				dataKey="threeptAtt"
				stroke="#FFC144"
				strokeWidth="3"
			/>
			<Line
				dot={false}
				type="monotone"
				dataKey="threeptMade"
				stroke="#7BC377"
				strokeWidth="3"
			/>
		</LineChart>
	);
};

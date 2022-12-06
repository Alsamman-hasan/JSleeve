import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DashboardCards.module.scss';
import BascIcon from '@/shared/assets/icons/Basketball.svg';
import { CardInfo } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

export interface DashboardCardsProps {
	className?: string;
}
export const DashboardCards = memo((props: DashboardCardsProps) => {
	const { className } = props;
	return (
		<HStack
			align="center"
			gap={1.75}
			className={classNames(cls.DashboardCards, {}, [className])}
		>
			<CardInfo
				indicator="+2.031%"
				increase
				Icon={BascIcon}
				title="Field Goal %"
				subTitle="64.38%"
			/>
			<CardInfo
				indicator="-2.201%"
				decrease
				Icon={BascIcon}
				title="Field Goal %"
				subTitle="64.38%"
			/>
			<CardInfo Icon={BascIcon} title="Field Goal %" subTitle="64.38%" />
			<CardInfo
				indicator="+2.031%"
				increase
				Icon={BascIcon}
				title="Field Goal %"
				subTitle="64.38%"
			/>
		</HStack>
	);
});

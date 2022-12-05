import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruterSubscription.module.scss';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';

export interface SubscriptionProps {
	className?: string;
	bestValue?: string;
	period?: string;
	price?: string | number;
	description?: string;
}

export const Subscription = memo((props: SubscriptionProps) => {
	const { className, bestValue, description, period, price } = props;
	return (
		<Layout className={classNames(cls.Subscription, {}, [className])}>
			<VStack align="start" gap={8}>
				{bestValue && (
					<PTag className={cls.bestValue} tage="14SemiBold">
						{bestValue}
					</PTag>
				)}
				<HStack max justify="between" className={cls.SubInfo}>
					<VStack align="start" gap={8}>
						<PTag tage="14SemiBold">{period}</PTag>
						<HStack>
							<Htag tage="h2">{price}$</Htag>
							<PTag tage="12Reg">/month</PTag>
						</HStack>
						<PTag tage="12Reg">{description}</PTag>
					</VStack>
					<ButtonUi className={cls.btn} layOut="TextOnly" theme="primary">
						Subscribe now
					</ButtonUi>
				</HStack>
			</VStack>
		</Layout>
	);
});

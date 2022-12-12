import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruterSubscription.module.scss';
import Recruterlogo from '@/shared/assets/icons/Recruterlogo.svg';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Subscription } from './Subscriptions';
import CheckGreenIcon from '@/shared/assets/icons/checkGreen.svg';
import { Loader } from '@/shared/ui/Loader/Loader';
import { getRouteRecruterSubscriptionStatus } from '@/shared/const/router';

export interface RecruterSubscriptionProps {
	className?: string;
}

const sunInro = [
	'Connect with athletes',
	'Effective recruitment platform',
	'Detailed Athlete Statistics',
];

export const RecruterSubscription = memo((props: RecruterSubscriptionProps) => {
	const { className } = props;
	const navigate = useNavigate();
	const [isLoading, setIsloading] = useState(false);

	const onClick = useCallback(() => {
		setIsloading(true);
		setTimeout(() => {
			navigate(getRouteRecruterSubscriptionStatus());
		}, 1500);
	}, [navigate]);

	const renderSubInro = useCallback((title: string) => {
		return (
			<HStack key={title} align="center" gap={0.5}>
				<CheckGreenIcon />
				<PTag tage="14Reg">{title}</PTag>
			</HStack>
		);
	}, []);

	const contetn = useCallback(() => {
		if (isLoading) {
			return (
				<>
					<Htag tage="h2" className={cls.header}>
						Waiting for purchase...
					</Htag>
					<PTag tage="14Reg" className={cls.footer}>
						Will take a few minutes.
					</PTag>
					<VStack align="center" className={cls.loader}>
						<Loader />
					</VStack>
				</>
			);
		}
		return (
			<>
				<Htag tage="h2" className={cls.header}>
					Choose a subscription type
				</Htag>
				<HStack max align="center" gap={1.125} className={cls.payment}>
					<VStack gap={1}>
						<Subscription
							bestValue="Best value"
							period="12 Months"
							description="54$ first payment"
							price="4.50$"
							onClick={onClick}
						/>
						<Subscription
							period="1 Month"
							description="15$ every month"
							price="15"
						/>
					</VStack>
					<DividerUi className={cls.Divider} orientation="vertical" />
					<VStack max className={cls.paymentInfo} gap={1}>
						<Htag tage="h3">Why subscribe?</Htag>
						{sunInro.map((title) => renderSubInro(title))}
					</VStack>
				</HStack>
				<PTag tage="14Reg" className={cls.footer}>
					You may cancel your subscription anytime from <br /> My subscription
					section in your profile.
				</PTag>
			</>
		);
	}, [isLoading, onClick, renderSubInro]);

	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<Recruterlogo />
				{contetn()}
			</VStack>
		</Layout>
	);
});

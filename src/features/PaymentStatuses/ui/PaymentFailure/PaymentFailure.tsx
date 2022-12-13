import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PaymentFailure.module.scss';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import { Layout } from '@/shared/ui/Layout/Layout';
import { VStack } from '@/shared/ui/Stack';
import CheckFailedIcon from '@/shared/assets/icons/CheckFailed.svg';
import { getRouteRecruterSubscription } from '@/shared/const/router';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Links } from '@/shared/ui/Links/Links';
import { PTag } from '@/shared/ui/Paragraph/P';

export interface PaymentFailureProps {
	className?: string;
}
export const PaymentFailure = memo((props: PaymentFailureProps) => {
	const { className } = props;
	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={1.75}
				className={classNames(cls.contetn, {}, [className])}
			>
				<LogoIcon />
				<CheckFailedIcon />
				<VStack align="center" justify="center" gap={0.75}>
					<Htag tage="h2" className={cls.header}>
						Something go wrong
					</Htag>
					<PTag className={cls.mistake} tage="14Reg">
						Description of the reason for this
					</PTag>
				</VStack>
				<ButtonUi
					layOut="TextOnly"
					theme="primary"
					size="L"
					className={cls.btn}
				>
					<Links to={getRouteRecruterSubscription()}>
						Return to add subscription
					</Links>
				</ButtonUi>
			</VStack>
		</Layout>
	);
});

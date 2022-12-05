import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecruterSubscription.module.scss';
import Recruterlogo from '@/shared/assets/icons/Recruterlogo.svg';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';

export interface RecruterSubscriptionProps {
	className?: string;
}

export const RecruterSubscription = memo((props: RecruterSubscriptionProps) => {
	const { className } = props;
	return (
		<Layout>
			<VStack
				align="center"
				justify="center"
				gap={28}
				className={classNames(cls.contetn, {}, [className])}
			>
				<Recruterlogo />
				<Htag tage="h2" className={cls.header}>
					Choose a subscription type
				</Htag>
				<HStack align="center" gap={18}>
					<VStack align="center" gap={16}>
						<VStack align="center">
							<div>dsdsd</div>
							<div>dsdsd</div>
						</VStack>
					</VStack>
					<DividerUi orientation="vertical" />
				</HStack>
				{/* <ButtonUi
					// disabled={!selected}
					// onClick={onMoveStep}
					layOut="IconAfter"
					// icon={<ArrowLineRight className={cls.btnIcon} />}
					theme="primary"
					size="L"
					className={cls.btn}
				>
					Continue
				</ButtonUi> */}
			</VStack>
		</Layout>
	);
});

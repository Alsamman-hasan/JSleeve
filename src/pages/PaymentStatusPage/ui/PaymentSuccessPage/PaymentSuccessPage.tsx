import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './PaymentSuccessPage.module.scss';
import { PaymentSuccess } from '@/features/PaymentStatuses';

export const PaymentSuccessPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<PaymentSuccess />
			</HStack>
		</Wrapper>
	);
});
export default PaymentSuccessPage;

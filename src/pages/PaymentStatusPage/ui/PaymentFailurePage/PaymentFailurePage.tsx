import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './PaymentFailurePage.module.scss';
import { PaymentFailure } from '@/features/PaymentStatuses';

export const PaymentFailurePage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<PaymentFailure />
			</HStack>
		</Wrapper>
	);
});
export default PaymentFailurePage;

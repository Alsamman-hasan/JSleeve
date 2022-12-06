import { memo } from 'react';
import { ForgotPassword } from '@/features/ForgotPassword';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './ForgotPasswordPage.module.scss';

const ForgotPasswordPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<ForgotPassword />
			</HStack>
		</Wrapper>
	);
});

export default ForgotPasswordPage;

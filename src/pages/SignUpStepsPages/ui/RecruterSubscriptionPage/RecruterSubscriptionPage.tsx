import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { RecruterSubscription } from '@/entities/SignUpSteps';
import cls from './RecruterSubscriptionPage.module.scss';

export const RecruterSubscriptionPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<RecruterSubscription />
			</HStack>
		</Wrapper>
	);
});
export default RecruterSubscriptionPage;

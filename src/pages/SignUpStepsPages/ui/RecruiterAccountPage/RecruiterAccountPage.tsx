import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './RecruiterAccountPage.module.scss';
import { RecruiterAccount } from '@/entities/SignUpSteps';

export const RecruiterAccountPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<RecruiterAccount />
			</HStack>
		</Wrapper>
	);
});
export default RecruiterAccountPage;

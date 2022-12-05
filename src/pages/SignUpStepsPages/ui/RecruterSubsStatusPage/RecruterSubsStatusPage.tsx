import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './RecruterSubsStatusPage.module.scss';
import { RecruterSubsStatus } from '@/entities/SignUpSteps/ui/RecruterSubsStatus/RecruterSubsStatus';

export const RecruterSubsStatusPage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<RecruterSubsStatus />
			</HStack>
		</Wrapper>
	);
});
export default RecruterSubsStatusPage;

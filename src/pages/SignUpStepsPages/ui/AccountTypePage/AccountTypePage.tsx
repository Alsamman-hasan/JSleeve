import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { AccountType } from '@/entities/SignUpSteps';
import cls from './AccountTypePage.module.scss';

export const AccountTypePage = memo(() => {
	return (
		<Wrapper>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<AccountType />
			</HStack>
		</Wrapper>
	);
});
export default AccountTypePage;

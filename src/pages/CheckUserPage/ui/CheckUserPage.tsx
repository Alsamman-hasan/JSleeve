import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './CheckUserPage.module.scss';
import { CheckUser } from '@/features/signIn';

export const CheckUserPage = memo(() => {
	return (
		<Wrapper className={cls.CheckUserPage}>
			<HStack className={cls.Wrapper} align="center" justify="center">
				<CheckUser />
			</HStack>
		</Wrapper>
	);
});
export default CheckUserPage;

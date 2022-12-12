import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Links } from '@/shared/ui/Links/Links';
import cls from './SignIn.module.scss';
import { getRouteSignUp } from '@/shared/const/router';

export const SignInFooter = memo(() => {
	return (
		<HStack gap={0.125}>
			<PTag className={cls.NotMember} tage="14Reg">
				Not a Member yet?{' '}
			</PTag>
			<PTag className={cls.signUp} tage="14Reg">
				<Links to={getRouteSignUp()}>Sign Up</Links>
			</PTag>
		</HStack>
	);
});

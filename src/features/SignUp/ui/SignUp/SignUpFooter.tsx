import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Links } from '@/shared/ui/Links/Links';
import cls from './SignUp.module.scss';
import { getRouteSignIn } from '@/shared/const/router';

export const SignUpFooter = memo(() => {
	return (
		<HStack gap={0.125}>
			<PTag className={cls.NotMember} tage="14Reg">
				Already have an Account?
			</PTag>
			<PTag className={cls.signUp} tage="14Reg">
				<Links to={getRouteSignIn()}>Sign in</Links>
			</PTag>
		</HStack>
	);
});

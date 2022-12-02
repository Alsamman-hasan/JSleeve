import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { PTag } from 'shared/ui/Paragraph/P';
import { Links } from 'shared/ui/Links/Links';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import cls from './SignUp.module.scss';

export const SignUpFooter = memo(() => {
	return (
		<HStack gap={2}>
			<PTag className={cls.NotMember} tage="14Reg">
				Already have an Account?
			</PTag>
			<PTag className={cls.signUp} tage="14Reg">
				<Links to={RoutesPaths.signIn}>Sign in</Links>
			</PTag>
		</HStack>
	);
});

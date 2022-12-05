import { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { LogoIcon } from '@/shared/assets/icons/LogoIcon';
import cls from './SignUp.module.scss';

export const SignUpHeader = memo(() => {
	return (
		<>
			<LogoIcon />
			<VStack align="center" justify="center" gap={12}>
				<Htag tage="h2" className={cls.header}>
					Sign Up
				</Htag>
				<PTag tage="14Reg" className={cls.subHeader}>
					Your Social Campaigns
				</PTag>
			</VStack>
		</>
	);
});

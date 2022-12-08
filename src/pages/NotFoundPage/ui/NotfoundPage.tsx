import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import cls from './NotfoundPage.module.scss';
import { Htag } from '@/shared/ui/Htage/Htage';
import { VStack } from '@/shared/ui/Stack';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Links } from '@/shared/ui/Links/Links';

export interface NotfoundPageProps {
	className?: string;
}
export const NotfoundPage = memo(({ className }: NotfoundPageProps) => {
	return (
		<Wrapper className={classNames(cls.NotfoundPage, {}, [className])}>
			<VStack align="center" gap={5}>
				<Htag tage="h1">Page not found</Htag>
				<ButtonUi size="L" theme="primary" layOut="TextOnly">
					<Links to="/dashboard">To Dashboard</Links>
				</ButtonUi>
			</VStack>
		</Wrapper>
	);
});

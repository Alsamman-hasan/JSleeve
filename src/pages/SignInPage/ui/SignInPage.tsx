import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SignIn } from '@/features/signIn';
import { HStack } from '@/shared/ui/Stack';
import cls from './SignInPage.module.scss';

export interface SignInPageProps {
	className?: string;
}

const SignInPage = memo((props: SignInPageProps) => {
	const { className } = props;
	return (
		<Wrapper className={classNames(cls.SignInPage, {}, [className])}>
			<HStack className={cls.sinWrapper} align="center" justify="center">
				<SignIn />
			</HStack>
		</Wrapper>
	);
});

export default SignInPage;

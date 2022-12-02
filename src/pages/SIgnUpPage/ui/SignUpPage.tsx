import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { HStack } from 'shared/ui/Stack';
import { SignUp } from 'features/SignUp';
import cls from './SignUpPage.module.scss';

export interface SignUpPageProps {
	className?: string;
}

const SignUpPage = memo((props: SignUpPageProps) => {
	const { className } = props;
	return (
		<Wrapper className={classNames(cls.SignUpPage, {}, [className])}>
			<HStack className={cls.signUpWrapper} align="center" justify="center">
				<SignUp />
			</HStack>
		</Wrapper>
	);
});

export default SignUpPage;

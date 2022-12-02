import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { VStack } from 'shared/ui/Stack';
import FaceBook from 'shared/assets/icons/Facebook.svg';
import { PTag } from 'shared/ui/Paragraph/P';
import { InputUi, InputBtn } from 'shared/ui/Input';
import { DividerUi } from 'shared/ui/Divider/DividerUi';
import { ButtonUi } from 'shared/ui/Button/Button';
import { Layout } from 'shared/ui/Layout/Layout';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { useSelector } from 'react-redux';
import { ErrorIcon } from 'shared/assets/icons/ErrorIcon';
import { Links } from 'shared/ui/Links/Links';
import { RoutesPaths } from 'shared/config/routeConfig/routeConfig';
import cls from './SignIn.module.scss';
import { signInReducer, signInActions } from '../../model/slices/signInSlice';
import {
	getSignInEmail,
	getSignInEmailError,
	getSignInEmailErrorMessage,
} from '../../model/selectors/getEmail/getEmail';
import { getSignInPassword } from '../../model/selectors/getPassword/getPassword';
import { SignInHeader } from './SignInHeader';
import { SignInFooter } from './SignInFooter';

const FaceBookIcon = memo(() => <FaceBook />);
interface SignInProps {
	className?: string;
}

const initialReducers: ReducersList = {
	signInData: signInReducer,
};

export const SignIn = memo((props: SignInProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	const email = useSelector(getSignInEmail);
	const emailError = useSelector(getSignInEmailError);
	const emailErrMessage = useSelector(getSignInEmailErrorMessage);
	const password = useSelector(getSignInPassword);

	const disabled = useMemo(() => {
		if (!email || emailError || !password) {
			return true;
		}
		return false;
	}, [email, emailError, password]);

	const onChangeEmail = useCallback(
		(value: string) => {
			dispatch(signInActions.setEmail(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(signInActions.setPassword(value));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<Layout>
				<VStack
					align="center"
					justify="center"
					gap={28}
					className={classNames(cls.SignIn, {}, [className])}
				>
					<SignInHeader />
					<InputBtn
						label="Sign in with Facebook"
						type="button"
						Icon={FaceBookIcon}
					/>
					<DividerUi text="Or with Email" />
					<VStack max align="center" justify="center" gap={8}>
						<InputUi
							onChange={onChangeEmail}
							value={email}
							className={cls.inputs}
							Icon={emailError ? ErrorIcon : undefined}
							type="email"
							label="Email"
							error={emailError || false}
							errorMessage={emailErrMessage && emailError && emailErrMessage}
						/>
						<InputUi
							onChange={onChangePassword}
							value={password}
							type="password"
							label="Password"
						/>
						<Links className={cls.Ptag} to={RoutesPaths.forgot_password}>
							<PTag tage="14Reg">Forgot Password?</PTag>
						</Links>
					</VStack>
					<VStack max align="center" justify="center" gap={16}>
						<ButtonUi
							disabled={disabled}
							className={cls.btn}
							theme="primary"
							size="L"
							layOut="TextOnly"
						>
							Sign In
						</ButtonUi>
						<SignInFooter />
					</VStack>
				</VStack>
			</Layout>
		</DynamicModuleLoader>
	);
});

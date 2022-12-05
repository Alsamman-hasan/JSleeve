import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import FaceBook from '@/shared/assets/icons/Facebook.svg';
import { InputUi, InputBtn } from '@/shared/ui/Input';
import { DividerUi } from '@/shared/ui/Divider/DividerUi';
import { ButtonUi } from '@/shared/ui/Button/Button';
import { Layout } from '@/shared/ui/Layout/Layout';
import { memo, useCallback, useMemo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { ErrorIcon } from '@/shared/assets/icons/ErrorIcon';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import cls from './SignUp.module.scss';
import { SignUpHeader } from './SignUpHeader';
import { SignUpFooter } from './SignUpFooter';
import { SignUpActions, SignUpReducer } from '../../model/slices/SignUpSlice';
import {
	getSignUpEmail,
	getSignUpEmailError,
	getSignUpEmailErrorMessage,
} from '../../model/selectors/getEmail/getSignUpEmails';
import {
	getSignUpPassword,
	getConPassErrMessage,
	getConfirmPassword,
	getConfirmPasswordError,
} from '../../model/selectors/getPassword/getPasswords';

interface SignUpProps {
	className?: string;
}
const initialReducers: ReducersList = {
	signUpData: SignUpReducer,
};

export const SignUp = memo((props: SignUpProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	const email = useSelector(getSignUpEmail);
	const emailError = useSelector(getSignUpEmailError);
	const emailErrMessage = useSelector(getSignUpEmailErrorMessage);
	const password = useSelector(getSignUpPassword);
	const confirmErrorMessage = useSelector(getConPassErrMessage);
	const confirmPassword = useSelector(getConfirmPassword);
	const confirmError = useSelector(getConfirmPasswordError);

	const disabled = useMemo(() => {
		if (!email || emailError || !password) {
			return true;
		}
		return false;
	}, [email, emailError, password]);
	const onChangeEmail = useCallback(
		(value: string) => {
			dispatch(SignUpActions.setEmail(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(SignUpActions.setPassword(value));
		},
		[dispatch]
	);

	const onChangeConfirmPassword = useCallback(
		(value: string) => {
			dispatch(SignUpActions.setConfirmPassword(value));
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
					className={classNames(cls.SignUp, {}, [className])}
				>
					<SignUpHeader />
					<InputBtn
						label="Sign in with Facebook"
						type="button"
						Icon={FaceBook}
					/>
					<DividerUi text="Or with Email" />
					<VStack max align="center" justify="center" gap={16}>
						<InputUi
							onChange={onChangeEmail}
							value={email}
							className={cls.inputs}
							Icon={emailError ? ErrorIcon : undefined}
							type="email"
							label="Email"
							error={emailError || false}
							errorMessage={emailErrMessage}
						/>
						<InputUi
							value={password}
							onChange={onChangePassword}
							type="password"
							label="Password"
						/>
						<InputUi
							value={confirmPassword}
							onChange={onChangeConfirmPassword}
							type="password"
							label="confirmPassword"
							error={confirmError || false}
							errorMessage={confirmErrorMessage}
						/>
					</VStack>
					<VStack max align="center" justify="center" gap={16}>
						<ButtonUi
							disabled
							className={cls.btn}
							theme="primary"
							size="L"
							layOut="TextOnly"
						>
							Sign Up
						</ButtonUi>
						<SignUpFooter />
					</VStack>
				</VStack>
			</Layout>
		</DynamicModuleLoader>
	);
});

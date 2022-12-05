import { StateSchema } from '@/app/providers/StorProvider';

export const getSignUpPassword = (state: StateSchema) =>
	state?.signUpData?.password || '';

export const getConfirmPassword = (state: StateSchema) =>
	state?.signUpData?.confirmPassword.confirmPassword || '';

export const getConfirmPasswordError = (state: StateSchema) =>
	state?.signUpData?.confirmPassword.confirmError || false;

export const getConPassErrMessage = (state: StateSchema) =>
	state?.signUpData?.confirmPassword.errorMessage || '';

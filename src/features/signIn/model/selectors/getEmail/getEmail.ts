import { StateSchema } from 'app/providers/StorProvider';

export const getSignInEmail = (state: StateSchema) =>
	state?.signInData?.email.email || '';

export const getSignInEmailError = (state: StateSchema) =>
	state?.signInData?.email.emailError || '';

export const getSignInEmailErrorMessage = (state: StateSchema) =>
	state?.signInData?.email.errorMessage || '';

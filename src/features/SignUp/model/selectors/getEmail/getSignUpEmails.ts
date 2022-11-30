import { StateSchema } from 'app/providers/StorProvider';

export const getSignUpEmail = (state: StateSchema) =>
  state?.signUpData?.email.email || '';

export const getSignUpEmailError = (state: StateSchema) =>
  state?.signUpData?.email.emailError || '';

export const getSignUpEmailErrorMessage = (state: StateSchema) =>
  state?.signUpData?.email.errorMessage || '';

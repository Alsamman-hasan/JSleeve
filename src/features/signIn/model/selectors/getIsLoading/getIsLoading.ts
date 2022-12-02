import { StateSchema } from 'app/providers/StorProvider';

export const getSignInIsLoading = (state: StateSchema) =>
	state?.signInData?.isLoading || false;

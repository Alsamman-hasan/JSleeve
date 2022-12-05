import { StateSchema } from '@/app/providers/StorProvider';

export const getSignInPassword = (state: StateSchema) =>
	state?.signInData?.password || '';

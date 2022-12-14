import { StateSchema } from '@/app/providers/StorProvider';

export const getCheckUserTypesIsLoading = (state: StateSchema) =>
	state.checkUserType.isLoading;
export const getCheckUserTypesaAthlete = (state: StateSchema) =>
	state.checkUserType.athlete;
export const getCheckUserTypesRecruiter = (state: StateSchema) =>
	state.checkUserType.recruiter;
export const getCheckUserTypesError = (state: StateSchema) =>
	state.checkUserType.error;

export const getCheckUserIsRecruiter = (state: StateSchema) =>
	state.checkUserType.isRecruiter;

export const getCheckUserIsAthlete = (state: StateSchema) =>
	state.checkUserType.isAthlete;

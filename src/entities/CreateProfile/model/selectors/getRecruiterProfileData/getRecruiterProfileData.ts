import { StateSchema } from '@/app/providers/StorProvider';

export const getRecruiterFirstName = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.firstName || '';
export const getRecruiterLastName = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.lastName || '';

export const getRecruiterPhone = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.phone || '';

export const getRecruiterAddres = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.address || '';

export const getRecruiterZip = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.zipCode || '';

export const getRecruiterCountry = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.country || '';

export const getRecruiterCity = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.city || '';

export const getRecruiterState = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.state || '';

export const getRecruiterStateCities = (state: StateSchema) =>
	state.recruiterProfileData?.states?.cities || [];

export const getRecruiterPlaceWork = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.placeOfWork || '';

export const getRecruiterRoleWork = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData.roleAtWork || '';

export const getRecruiterAvatar = (state: StateSchema) =>
	state.recruiterProfileData?.avatar || undefined;

export const getRecruiterData = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData;

export const getRecruiterError = (state: StateSchema) =>
	state.recruiterProfileData?.error;

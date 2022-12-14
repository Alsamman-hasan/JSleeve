import { StateSchema } from '@/app/providers/StorProvider';

export const err: string[] = [
	'firstName',
	'lastName',
	'phone',
	'address',
	'zipCode',
	'country',
	'citry',
	'state',
	'placeOfWork',
	'roleAtWork',
];
export const getRecruiterFirstName = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.firstName || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('firstName'), 1);
	}
	return data || '';
};

export const getRecruiterLastName = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.lastName || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('lastName'), 1);
	}
	return data || '';
};

export const getRecruiterPhone = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.phone || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('phone'), 1);
	}
	return data || '';
};

export const getRecruiterAddres = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.address || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('address'), 1);
	}
	return data || '';
};

export const getRecruiterZip = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.zipCode || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('zipCode'), 1);
	}
	return data || '';
};

export const getRecruiterCountry = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.country || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('country'), 1);
	}
	return data || '';
};

export const getRecruiterCity = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.city || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('city'), 1);
	}
	return data || '';
};

export const getRecruiterState = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.state || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('state'), 1);
	}
	return data || '';
};

export const getRecruiterPlaceWork = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.placeOfWork || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('placeOfWork'), 1);
	}
	return data || '';
};

export const getRecruiterRoleWork = (state: StateSchema) => {
	const data = state.recruiterProfileData?.recruiterData.roleAtWork || '';
	if (data?.length > 0) {
		err.splice(err.indexOf('roleAtWork'), 1);
	}
	return data || '';
};

export const getRecruiterAvatar = (state: StateSchema) =>
	state.recruiterProfileData?.avatar || undefined;

export const getRecruiterData = (state: StateSchema) =>
	state.recruiterProfileData?.recruiterData;

export const getRecruiterErrors = (state: StateSchema) =>
	state.recruiterProfileData?.errors || [];

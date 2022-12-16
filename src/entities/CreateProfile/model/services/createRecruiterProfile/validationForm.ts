import { RecruiterProfile } from '../../types/recruiterProfile';

export const validateProfileData = (profile: RecruiterProfile): string[] => {
	const errors = [];
	const { country, firstName, lastName, phone, state } = profile;

	if (!country) {
		errors.push('country is required');
	}
	if (!firstName) {
		errors.push('firstName is required');
	}
	if (!lastName) {
		errors.push('lastName is required');
	}
	if (!phone) {
		errors.push('phone is required');
	}

	if (!state) {
		errors.push('state is required');
	}

	return errors;
};

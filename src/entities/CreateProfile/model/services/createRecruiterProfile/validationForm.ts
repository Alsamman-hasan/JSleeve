import { RecruiterProfile } from '../../types/recruiterProfile';

export const validateProfileData = (profile: RecruiterProfile): string[] => {
	const errors = [];
	const {
		address,
		city,
		country,
		firstName,
		lastName,
		phone,
		placeOfWork,
		roleAtWork,
		state,
		zipCode,
	} = profile;
	if (!address) {
		errors.push('address is required');
	}
	if (!city) {
		errors.push('city is required');
	}
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
	if (!placeOfWork) {
		errors.push('placeOfWork is required');
	}
	if (!roleAtWork) {
		errors.push('roleAtWork is required');
	}
	if (!state) {
		errors.push('state is required');
	}
	if (!zipCode) {
		errors.push('zipCode is required');
	}

	return errors;
};

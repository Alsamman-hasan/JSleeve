export interface RecruiterProfile {
	firstName: string;
	lastName: string;
	phone: string;
	country: string;
	state: string;
	city: string;
	address: string;
	zipCode: string;
	placeOfWork: string;
	roleAtWork: string;
}
export interface RecruiterProfileSchema {
	isLoading: boolean;
	error?: string;
	errors?: string[];
	recruiterData: RecruiterProfile;
	avatar?: FormData;
}

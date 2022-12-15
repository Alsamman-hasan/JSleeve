export interface Athlete {
	hasActiveSubscription: boolean;
	hasProfile: boolean;
	isConsentProvided: boolean;
}

export interface Recruiter {
	hasActiveSubscription: boolean;
	hasProfile: boolean;
}
export interface CheckUserTypeSchema {
	isLoading: boolean;
	error?: string;
	athlete: Athlete | null | undefined;
	recruiter: Recruiter | null | undefined;
	isAthlete: boolean;
	isRecruiter: boolean;
}

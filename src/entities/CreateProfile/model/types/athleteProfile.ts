export interface AthleteProfile {
	firstName: string;
	lastName: string;
	programName: string;
	country: string;
	state: string;
	city: string;
	birthDate: string;
	armColour: string;
	gender: string;
	dominantHand: string;
	position: string;
	heightFt: number | string | null;
	heightIn: number | string | null;
	heightInFr: string;
	weightLb: number | string | null;
}
export interface AthleteProfileSchema {
	isLoading: boolean;
	error?: string;
	errors?: string[];
	athleteData: AthleteProfile;
	avatar?: FormData;
}

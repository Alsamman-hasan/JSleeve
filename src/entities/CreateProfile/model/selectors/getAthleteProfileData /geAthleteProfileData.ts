import { StateSchema } from '@/app/providers/StorProvider';

export const getAthleteFirstName = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.firstName || '';
export const getAthleteLastName = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.lastName || '';

export const getAthleteArmColour = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.armColour || '';

export const getAthleteBirthDate = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.birthDate || null;

export const getAthleteGender = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.gender || '';

export const getAthleteCountry = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.country || '';

export const getAthleteCity = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.city || '';

export const getAthleteState = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.state || '';

export const getAthleteDominantHand = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.dominantHand || '';

export const getAthleteHeightFt = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.heightFt || '';

export const getAthleteHeightIn = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.heightIn || '';

export const getAthleteHeightInFr = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.heightInFr || '';

export const getAthletePosition = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.position || '';

export const getAthleteProgramName = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.programName || '';

export const getAthleteWeightLb = (state: StateSchema) =>
	state.athleteProfileData?.athleteData.weightLb || '';

export const getAthleteAvatar = (state: StateSchema) =>
	state.athleteProfileData?.avatar || undefined;

export const getAthleteData = (state: StateSchema) =>
	state.athleteProfileData?.athleteData;

export const getAthleteErrors = (state: StateSchema) =>
	state.athleteProfileData?.errors || [];

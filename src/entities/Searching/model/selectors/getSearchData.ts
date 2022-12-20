import { StateSchema } from '@/app/providers/StorProvider';

export const getSearchAthleteIsLaoding = (state: StateSchema) =>
	state.searchAthlete?.isLoading || false;

export const getSearchAthleteError = (state: StateSchema) =>
	state.searchAthlete?.error || '';

export const getSearchAthleteTake = (state: StateSchema) =>
	state.searchAthlete?.searchData.take || 10;

export const getSearchAthleteAgeMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.minAge || '';

export const getSearchAthleteAgeMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.maxAge || '';

export const getSearchAthleteMinWeightLb = (state: StateSchema) =>
	state.searchAthlete?.searchData.minWeightLb || '';

export const getSearchAthleteMaxWeightLb = (state: StateSchema) =>
	state.searchAthlete?.searchData.maxWeightLb || '';

export const getSearchAthleteMinHeightFt = (state: StateSchema) =>
	state.searchAthlete?.searchData.minHeightFt || '';

export const getSearchAthleteMaxHeightFt = (state: StateSchema) =>
	state.searchAthlete?.searchData.maxHeightFt || '';

export const getSearchAthleteMinHeightIn = (state: StateSchema) =>
	state.searchAthlete?.searchData.minHeightIn || '';

export const getSearchAthleteMaxHeightIn = (state: StateSchema) =>
	state.searchAthlete?.searchData.maxHeightIn || '';

export const getSearchAthleteTotalSessionsMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalSessionsMin || '';

export const getSearchAthleteTotalSessionsMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalSessionsMax || '';

export const getSearchAthleteTotalShotsMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalShotsMin || '';

export const getSearchAthleteTotalShotsMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalShotsMax || '';

export const getSearchAthleteTotalFieldGoalsMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalFieldGoalsMin || '';

export const getSearchAthleteTotalFieldGoalsMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.totalFieldGoalsMax || '';

export const getSearchAthleteFieldGoalPercentMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.fieldGoalPercentMin || '';

export const getSearchAthleteFieldGoalPercentMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.fieldGoalPercentMax || '';

export const getSearchAthleteFieldGoalAccuracyMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.fieldGoalAccuracyMin || '';

export const getSearchAthleteFieldGoalAccuracyMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.fieldGoalAccuracyMax || '';

export const getSearchAthleteJumpShotRatingMin = (state: StateSchema) =>
	state.searchAthlete?.searchData.jumpShotRatingMin || '';

export const getSearchAthleteJumpShotRatingMax = (state: StateSchema) =>
	state.searchAthlete?.searchData.jumpShotRatingMax || '';

export const getSearchAthletePosition = (state: StateSchema) =>
	state.searchAthlete?.searchData.position || '';

export const getSearchGender = (state: StateSchema) =>
	state.searchAthlete?.searchData.gender || '';

export const getSearchAthleteDominantHand = (state: StateSchema) =>
	state.searchAthlete?.searchData.dominantHand || '';

export const getSearchAthleteCountry = (state: StateSchema) =>
	state.searchAthlete?.searchData.country || '';

export const getSearchAthleteState = (state: StateSchema) =>
	state.searchAthlete?.searchData.state || '';

export const getSearchAthleteCity = (state: StateSchema) =>
	state.searchAthlete?.searchData.city || '';

export const getSearchAthleteCities = (state: StateSchema) =>
	state.searchAthlete?.states.cities || [];

export const getSearchAthleteData = (state: StateSchema) =>
	state.searchAthlete?.filterValues;

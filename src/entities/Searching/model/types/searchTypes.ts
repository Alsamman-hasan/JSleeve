export type Position =
	| 'Center'
	| 'PowerForward'
	| 'SmallForward'
	| 'PointGuard'
	| 'ShootingGuard';

export interface USAState {
	label: string;
	code: string;
	cities?: string[];
}
export interface SearchData {
	take: number | null;
	minAge: number | null;
	maxAge: number | null;
	minWeightLb: number | null;
	maxWeightLb: number | null;
	minHeightFt: number | null;
	maxHeightFt: number | null;
	minHeightIn: number | null;
	maxHeightIn: number | null;
	totalSessionsMin: number | null;
	totalSessionsMax: number | null;
	totalShotsMin: number | null;
	totalShotsMax: number | null;
	totalFieldGoalsMin: number | null;
	totalFieldGoalsMax: number | null;
	fieldGoalPercentMin: number | null;
	fieldGoalPercentMax: number | null;
	fieldGoalAccuracyMin: number | null;
	fieldGoalAccuracyMax: number | null;
	jumpShotRatingMin: number | null;
	jumpShotRatingMax: number | null;
	position: Position | null;
	gender: 'Male' | 'Female' | null;
	dominantHand: 'Right' | 'Left' | null;
	country: string | null;
	state: string | null;
	city: string | null;
}

interface AllTimeSummaryType {
	athleteId: string;
	totalSessions: number;
	totalShots: number;
	totalFieldGoals: number;
	totalOnePointShots: number;
	totalTwoPointsShots: number;
	totalThreePointsShots: number;
	totalOnePointGoals: number;
	totalTwoPointsGoals: number;
	totalThreePointsGoals: number;
	fieldGoalPercent: number;
	onePointGoalPercent: number;
	twoPointsGoalPercent: number;
	threePointsGoalPercent: number;
	fieldGoalAccuracy: number;
	jumpShotRating: number;
	totalDuration: number;
	averageDuration: number;
	createdAt: string;
	updatedAt: string;
}
interface Summary {
	athleteId: string;
	totalSessions: number;
	totalShots: number;
	totalFieldGoals: number;
	totalOnePointShots: number;
	totalTwoPointsShots: number;
	totalThreePointsShots: number;
	totalOnePointGoals: number;
	totalTwoPointsGoals: number;
	totalThreePointsGoals: number;
	fieldGoalPercent: number;
	onePointGoalPercent: number;
	twoPointsGoalPercent: number;
	threePointsGoalPercent: number;
	fieldGoalAccuracy: number;
	jumpShotRating: number;
	totalDuration: number;
	averageDuration: number;
	createdAt: string;
	updatedAt: string;
}

export interface Athlete {
	id: string;
	birthDate: string;
	country: string;
	state: string;
	city: string;
	heightIn: 5;
	heightFt: 6;
	heightInFr: string;
	weightLb: 220;
	position: string;
	dominantHand: string;
	gender: string;
	AllTimeSummary: AllTimeSummaryType;
	RecruitingConnections: [];
	RecruitingRequests: [];
	summary: Summary;
}
export interface SearchResponse {
	count: number;
	athletes: Athlete[];
}

export interface SearchAthleteSchema {
	isLoading: boolean;
	error: string | undefined;
	errors?: string[];
	states: USAState;
	searchData: SearchData;
	filterValues: any | undefined;
	athleteData: SearchResponse | undefined;
}

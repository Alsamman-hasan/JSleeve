export type Position =
	| 'Center'
	| 'PowerForward'
	| 'SmallForward'
	| 'PointGuard'
	| 'ShootingGuard';
export interface SearchData {
	take?: number;
	minAge?: number;
	maxAge?: number;
	minWeightLb?: number;
	maxWeightLb?: number;
	minHeightFt?: number;
	maxHeightFt?: number;
	minHeightIn?: number;
	maxHeightIn?: number;
	totalSessionsMin?: number;
	totalSessionsMax?: number;
	totalShotsMin?: number;
	totalShotsMax?: number;
	totalFieldGoalsMin?: number;
	totalFieldGoalsMax?: number;
	fieldGoalPercentMin?: number;
	fieldGoalAccuracyMin?: number;
	fieldGoalAccuracyMax?: number;
	jumpShotRatingMin?: number;
	jumpShotRatingMax?: number;
	position?: Position;
	gender?: 'Male' | 'Female';
	dominantHand?: 'Right' | 'Left';
	country?: string;
	state?: string;
	city?: string;
}
export interface SearchSchema {
	isLoading: boolean;
	error: string;
	searchData: SearchData | undefined;
}

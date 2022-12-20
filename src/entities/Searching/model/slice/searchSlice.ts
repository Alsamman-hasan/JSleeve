import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchAthleteReq } from '../services/searchAthleteReq';
import { Position, SearchAthleteSchema, USAState } from '../types/searchTypes';

const initialState: SearchAthleteSchema = {
	error: '',
	isLoading: false,
	errors: [],
	states: {
		code: '',
		label: '',
		cities: [],
	},
	filterValues: undefined,
	searchData: {
		take: 10,
		minAge: null,
		maxAge: null,
		minWeightLb: null,
		maxWeightLb: null,
		minHeightFt: null,
		maxHeightFt: null,
		minHeightIn: null,
		maxHeightIn: null,
		totalSessionsMin: null,
		totalSessionsMax: null,
		totalShotsMin: null,
		totalShotsMax: null,
		totalFieldGoalsMin: null,
		totalFieldGoalsMax: null,
		fieldGoalPercentMin: null,
		fieldGoalPercentMax: null,
		fieldGoalAccuracyMin: null,
		fieldGoalAccuracyMax: null,
		jumpShotRatingMin: null,
		jumpShotRatingMax: null,
		position: null,
		gender: null,
		dominantHand: null,
		country: null,
		state: null,
		city: null,
	},
	athleteData: undefined,
};

export const searchAthleteSlice = createSlice({
	name: 'searchAthlete',
	initialState,
	reducers: {
		setSearchTake: (state, { payload }: PayloadAction<number>) => {
			state.searchData.take = payload;
			state.filterValues = { ...state.filterValues, take: payload };
		},
		setSearchAgeMin: (state, { payload }: PayloadAction<number>) => {
			state.searchData.minAge = payload;
			state.filterValues = { ...state.filterValues, minAge: payload };
		},
		setSearchAgeMax: (state, { payload }: PayloadAction<number>) => {
			state.searchData.maxAge = payload;
			state.filterValues = { ...state.filterValues, maxAge: payload };
		},
		setSearchMinWeightLb: (state, { payload }: PayloadAction<number>) => {
			state.searchData.minWeightLb = payload;
			state.filterValues = { ...state.filterValues, minWeightLb: payload };
		},
		setSearchMaxWeightLb: (state, { payload }: PayloadAction<number>) => {
			state.searchData.maxWeightLb = payload;
			state.filterValues = { ...state.filterValues, maxWeightLb: payload };
		},
		setSearchMinHeightFt: (state, { payload }: PayloadAction<number>) => {
			state.searchData.minHeightFt = payload;
			state.filterValues = { ...state.filterValues, minHeightFt: payload };
		},
		setSearchMaxHeightFt: (state, { payload }: PayloadAction<number>) => {
			state.searchData.maxHeightFt = payload;
			state.filterValues = { ...state.filterValues, maxHeightFt: payload };
		},
		setSearchMinHeightIn: (state, { payload }: PayloadAction<number>) => {
			state.searchData.minHeightIn = payload;
			state.filterValues = { ...state.filterValues, minHeightIn: payload };
		},
		setSearchMaxHeightIn: (state, { payload }: PayloadAction<number>) => {
			state.searchData.maxHeightIn = payload;
			state.filterValues = { ...state.filterValues, maxHeightIn: payload };
		},
		setSearchTotalSessionsMin: (state, { payload }: PayloadAction<number>) => {
			state.searchData.totalSessionsMin = payload;
			state.filterValues = { ...state.filterValues, totalSessionsMin: payload };
		},
		setSearchTotalSessionsMax: (state, { payload }: PayloadAction<number>) => {
			state.searchData.totalSessionsMax = payload;
			state.filterValues = { ...state.filterValues, totalSessionsMax: payload };
		},
		setSearchTotalShotsMin: (state, { payload }: PayloadAction<number>) => {
			state.searchData.totalShotsMin = payload;
			state.filterValues = { ...state.filterValues, totalShotsMin: payload };
		},
		setSearchTotalShotsMax: (state, { payload }: PayloadAction<number>) => {
			state.searchData.totalShotsMax = payload;
			state.filterValues = { ...state.filterValues, totalShotsMax: payload };
		},
		setSearchTotalFieldGoalsMin: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.totalFieldGoalsMin = payload;
			state.filterValues = {
				...state.filterValues,
				totalFieldGoalsMin: payload,
			};
		},
		setSearchTotalFieldGoalsMax: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.totalFieldGoalsMax = payload;
			state.filterValues = {
				...state.filterValues,
				totalFieldGoalsMax: payload,
			};
		},
		setSearchFieldGoalPercentMin: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.fieldGoalPercentMin = payload;
			state.filterValues = {
				...state.filterValues,
				fieldGoalPercentMin: payload,
			};
		},
		setSearchFieldGoalPercentMax: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.fieldGoalPercentMax = payload;
			state.filterValues = {
				...state.filterValues,
				fieldGoalPercentMax: payload,
			};
		},
		setSearchFieldGoalAccuracyMin: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.fieldGoalAccuracyMin = payload;
			state.filterValues = {
				...state.filterValues,
				fieldGoalAccuracyMin: payload,
			};
		},
		setSearchFieldGoalAccuracyMax: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			state.searchData.fieldGoalAccuracyMax = payload;
			state.filterValues = {
				...state.filterValues,
				fieldGoalAccuracyMax: payload,
			};
		},
		setSearchJumpShotRatingMin: (state, { payload }: PayloadAction<number>) => {
			state.searchData.jumpShotRatingMin = payload;
			state.filterValues = {
				...state.filterValues,
				jumpShotRatingMin: payload,
			};
		},
		setSearchJumpShotRatingMax: (state, { payload }: PayloadAction<number>) => {
			state.searchData.jumpShotRatingMax = payload;
			state.filterValues = {
				...state.filterValues,
				jumpShotRatingMax: payload,
			};
		},
		setSearchPosition: (state, { payload }: PayloadAction<Position>) => {
			state.searchData.position = payload;
			state.filterValues = { ...state.filterValues, position: payload };
		},
		setSearchGender: (
			state,
			{ payload }: PayloadAction<'Male' | 'Female' | null>
		) => {
			state.searchData.gender = payload;
			state.filterValues = { ...state.filterValues, gender: payload };
		},
		setSearchDominantHand: (
			state,
			{ payload }: PayloadAction<'Right' | 'Left' | null>
		) => {
			state.searchData.dominantHand = payload;
			state.filterValues = { ...state.filterValues, dominantHand: payload };
		},
		setSearchCountry: (state, { payload }: PayloadAction<string>) => {
			state.searchData.country = payload;
			state.filterValues = { ...state.filterValues, country: payload };
		},
		setSearcState: (state, { payload }: PayloadAction<USAState>) => {
			state.states = payload;
			state.searchData.state = payload?.code || '';
			state.states = { ...state.states, ...payload };
			state.filterValues = {
				...state.filterValues,
				state: payload?.code || '',
			};
		},
		setSearchCity: (state, { payload }: PayloadAction<string>) => {
			state.searchData.city = payload;
			state.filterValues = { ...state.filterValues, city: payload };
		},
		setClearSearch: (state) => {
			state.searchData = initialState.searchData;
			state.errors = initialState.errors;
			state.error = initialState.error;
			state.filterValues = undefined;
			state.states = {
				code: '',
				label: '',
				cities: [],
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchAthleteReq.pending, (state) => {
				state.error = undefined;
				state.errors = [];
				state.isLoading = true;
			})
			.addCase(searchAthleteReq.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.athleteData = payload;
			})
			.addCase(searchAthleteReq.rejected, (state, action) => {
				state.isLoading = false;
				state.errors = action.payload;
			});
	},
});

export const { actions: searchAthleteActions } = searchAthleteSlice;
export const { reducer: searchAthleteReducer } = searchAthleteSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAthleteProfileReq } from '../../services/createAthleteProfile/createAthleteProfileReq';
import { AthleteProfileSchema, USAState } from '../../types/athleteProfile';

const initialState: AthleteProfileSchema = {
	isLoading: false,
	error: undefined,
	errors: [],
	avatar: undefined,
	states: {
		code: '',
		label: '',
	},
	athleteData: {
		city: '',
		country: '',
		firstName: '',
		lastName: '',
		state: '',
		armColour: '',
		birthDate: '',
		gender: '',
		dominantHand: '',
		heightFt: '',
		heightIn: '',
		heightInFr: '',
		position: '',
		programName: '',
		weightLb: '',
	},
};

const athleteProfileSlice = createSlice({
	name: 'athleteProfile',
	initialState,
	reducers: {
		setFirstName: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.firstName = payload;
		},
		setLastName: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.lastName = payload;
		},
		setArmColour: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.armColour = payload;
		},
		setBirthDate: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.birthDate = payload;
		},
		setGender: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.gender = payload;
		},
		setDominantHand: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.dominantHand = payload;
		},
		setCity: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.city = payload;
		},
		setCountry: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.country = payload;
		},
		setState: (state, { payload }: PayloadAction<USAState>) => {
			state.states = payload;
			state.athleteData.state = payload.code;
		},
		setHeightFt: (state, { payload }: PayloadAction<number>) => {
			state.athleteData.heightFt = payload;
		},
		setHeightIn: (state, { payload }: PayloadAction<number>) => {
			state.athleteData.heightIn = payload;
		},
		setWeightLb: (state, { payload }: PayloadAction<number>) => {
			state.athleteData.weightLb = payload;
		},
		setHeightInFr: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.heightInFr = payload;
		},
		setPosition: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.position = payload;
		},
		setProgramName: (state, { payload }: PayloadAction<string>) => {
			state.athleteData.programName = payload;
		},
		setAvatar: (state, { payload }: PayloadAction<FormData>) => {
			state.avatar = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createAthleteProfileReq.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(createAthleteProfileReq.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(createAthleteProfileReq.rejected, (state, action) => {
				state.isLoading = false;
				state.errors = action.payload;
			});
	},
});

export const { actions: athleteProfileActions } = athleteProfileSlice;
export const { reducer: athleteProfileReducer } = athleteProfileSlice;

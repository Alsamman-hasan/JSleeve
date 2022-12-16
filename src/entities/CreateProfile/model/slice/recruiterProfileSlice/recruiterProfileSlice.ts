import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRecruiterProfileReq } from '../../services/createRecruiterProfile/createRecruiterProfileReq';
import { RecruiterProfileSchema, USAState } from '../../types/recruiterProfile';

const initialState: RecruiterProfileSchema = {
	isLoading: false,
	error: undefined,
	errors: [],
	avatar: undefined,
	states: {
		code: '',
		label: '',
	},
	recruiterData: {
		address: '',
		city: '',
		country: '',
		firstName: '',
		lastName: '',
		phone: '',
		state: '',
		zipCode: '',
		placeOfWork: '',
		roleAtWork: '',
	},
};

const recruiterProfileSlice = createSlice({
	name: 'recruiterProfile',
	initialState,
	reducers: {
		setFirstName: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.firstName = payload;
		},
		setLastName: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.lastName = payload;
		},
		setPhoneName: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.phone = payload;
		},
		setPlaceOfWork: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.placeOfWork = payload;
		},
		setRoleAtWork: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.roleAtWork = payload;
		},
		setAddres: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.address = payload;
		},
		setCity: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.city = payload;
		},
		setCountry: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.country = payload;
		},
		setState: (state, { payload }: PayloadAction<USAState>) => {
			state.states = payload;
			state.recruiterData.state = payload.code;
		},
		setZipCode: (state, { payload }: PayloadAction<string>) => {
			state.recruiterData.zipCode = payload;
		},
		setAvatar: (state, { payload }: PayloadAction<FormData>) => {
			state.avatar = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createRecruiterProfileReq.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(createRecruiterProfileReq.fulfilled, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(createRecruiterProfileReq.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: recruiterProfileActions } = recruiterProfileSlice;
export const { reducer: recruiterProfileReducer } = recruiterProfileSlice;

import { createSlice } from '@reduxjs/toolkit';
import { CheckUserTypeSchema } from '../types/checkUserSchems';
import { fetchUserType } from '../services/CheckUserStatusReq/checkUserStatus';

const initialState: CheckUserTypeSchema = {
	isLoading: false,
	athlete: null,
	recruiter: null,
	error: '',
};

export const checkUserTypeSlice = createSlice({
	name: 'checkUserType',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserType.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchUserType.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.athlete = payload.athlete;
				state.recruiter = payload.recruiter;
			})
			.addCase(fetchUserType.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: checkUserTypeActions } = checkUserTypeSlice;
export const { reducer: checkUserTypeReducer } = checkUserTypeSlice;

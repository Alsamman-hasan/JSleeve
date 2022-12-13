import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userTypes, UserTypeSchema } from '../types/userTypes';

const initialState: UserTypeSchema = {
	userType: null,
};

export const userTypeSlice = createSlice({
	name: 'userType',
	initialState,
	reducers: {
		setUserType: (state, { payload }: PayloadAction<userTypes>) => {
			state.userType = payload;
		},
	},
});

export const { actions: userTypeActions } = userTypeSlice;
export const { reducer: userTypeReducer } = userTypeSlice;

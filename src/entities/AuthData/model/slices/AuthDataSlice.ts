import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthDataSchema } from '../types/AuthDataSchema';

const initialState: AuthDataSchema = {
	user: {},
};

export const AuthDataSlice = createSlice({
	name: 'AuthData',
	initialState,
	reducers: {
		setAuthData: (state, { payload }: PayloadAction<AuthDataSchema>) => {
			state.user = payload;
		},
	},
});

export const { actions: AuthDataActions } = AuthDataSlice;
export const { reducer: AuthDataReducer } = AuthDataSlice;

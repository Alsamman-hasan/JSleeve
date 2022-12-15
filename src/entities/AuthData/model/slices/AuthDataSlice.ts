import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'oidc-react';
import { AuthDataSchema } from '../types/AuthDataSchema';

const initialState: AuthDataSchema = {
	user: undefined,
	token: undefined,
};

export const AuthDataSlice = createSlice({
	name: 'AuthData',
	initialState,
	reducers: {
		setAuthData: (state, { payload }: PayloadAction<User>) => {
			localStorage.setItem('tokenId', payload?.id_token as string);
			state.token = payload?.id_token;
			state.user = payload;
		},
	},
});

export const { actions: AuthDataActions } = AuthDataSlice;
export const { reducer: AuthDataReducer } = AuthDataSlice;

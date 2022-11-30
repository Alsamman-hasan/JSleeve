import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthDataSchema } from '../types/AuthDataSchema';

const initialState: AuthDataSchema = {
  user: {},
  accessToken: '',
  refreshToken: '',
};

export const AuthDataSlice = createSlice({
  name: 'AuthData',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<AuthDataSchema>) => {
      state.user = payload?.user;
      state.accessToken = payload?.accessToken;
      state.refreshToken = payload?.refreshToken;
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: AuthDataActions } = AuthDataSlice;
export const { reducer: AuthDataReducer } = AuthDataSlice;

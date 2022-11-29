import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInSchema } from '../types/signInSchema';

const initialState: SignInSchema = {};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    template: (state, action: PayloadAction<string>) => {},
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

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;

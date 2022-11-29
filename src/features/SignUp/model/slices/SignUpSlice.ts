import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignUpSchema } from '../types/SignUpSchema';

const initialState: SignUpSchema = {};

export const SignUpSlice = createSlice({
  name: 'SignUp',
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

export const { actions: SignUpActions } = SignUpSlice;
export const { reducer: SignUpReducer } = SignUpSlice;

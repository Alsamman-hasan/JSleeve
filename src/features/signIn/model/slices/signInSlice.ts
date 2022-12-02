import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { validatorEmail } from 'shared/lib/validation/validationForm';
import { SignInSchema } from '../types/signInSchema';

const initialState: SignInSchema = {
	isLoading: false,
	email: {
		email: '',
		emailError: false,
		errorMessage: '',
	},
	error: '',
	password: '',
};

export const signInSlice = createSlice({
	name: 'signIn',
	initialState,
	reducers: {
		setEmail: (state, { payload }: PayloadAction<string>) => {
			const err = validatorEmail(payload);
			state.email.emailError = !err;
			if (!err) state.email.errorMessage = 'Input valid Email';
			state.email.email = payload;
		},
		setPassword: (state, { payload }: PayloadAction<string>) => {
			state.password = payload;
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

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;

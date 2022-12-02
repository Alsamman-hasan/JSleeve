import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { validatorEmail } from 'shared/lib/validation/validationForm';
import { SignUpSchema } from '../types/SignUpSchema';

const initialState: SignUpSchema = {
	email: {
		email: '',
		emailError: false,
		errorMessage: '',
	},
	password: '',
	confirmPassword: {
		confirmPassword: '',
		confirmError: false,
		errorMessage: '' || undefined,
	},
	error: false,
	isLoading: false,
};

export const SignUpSlice = createSlice({
	name: 'SignUp',
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
			const err = !!(state.confirmPassword.confirmPassword !== payload);
			state.confirmPassword.confirmError = err;
			if (err) {
				state.confirmPassword.errorMessage = `Password doesn't match`;
			} else {
				state.confirmPassword.errorMessage = undefined;
			}
		},
		setConfirmPassword: (state, { payload }: PayloadAction<string>) => {
			const err = !!(state.password !== payload);
			state.confirmPassword.confirmError = err;
			if (err) {
				state.confirmPassword.errorMessage = `Password doesn't match`;
			} else {
				state.confirmPassword.errorMessage = undefined;
			}
			state.confirmPassword.confirmPassword = payload;
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

export const { actions: SignUpActions } = SignUpSlice;
export const { reducer: SignUpReducer } = SignUpSlice;

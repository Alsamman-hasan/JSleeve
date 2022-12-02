interface Emailes {
	email: string;
	emailError?: boolean;
	errorMessage?: string;
}
export interface SignInSchema {
	isLoading: boolean;
	error: string;
	email: Emailes;
	password: string;
}

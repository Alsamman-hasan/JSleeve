interface Emailes {
	email: string;
	emailError?: boolean;
	errorMessage?: string;
}

interface ConfirmPassword {
	confirmPassword: string;
	confirmError?: boolean;
	errorMessage?: string;
}
export interface SignUpSchema {
	email: Emailes;
	password: string;
	confirmPassword: ConfirmPassword;
	isLoading: boolean;
	error: boolean;
}

export enum AppRoutes {
	MAIN = 'main',
	SIGNIN = 'signIn',
	SIGNUP = 'signUp',
	CONFIRMEMAIL = 'confirm_email',
	CONFIRMUSER = 'confirm_user',
	FORGOTPASSWORD = 'forgot_password',
	ACCOUNTTYPE = 'account_type',
	ACCOUNTDETAILES = 'account_detailes',
	CHECKUSER = 'check_user',
	RECRUCTERSUBS = 'Recruter_subscription',
	DASHBOARD = 'dashboard',
	SEARCHING = 'searching',
	PAYMENTSUCCESS = 'payment_success',
	PAYMENTFAILURE = 'payment_failure',
	RECRUITERPROFILE = 'recruiter_profile',
	// last
	UIKIT = 'uikit',
	NOTFOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSignIn = () => '/auth/signIn';
export const getRouteSignUp = () => '/auth/signUp';
export const getRouteConfirmEmail = () => '/auth/confirm_email';
export const getRouteConfirmUser = () => '/auth/confirm_user';
export const getRouteForgotPassword = () => '/auth/forgot_password';
export const getRouteAccountType = () => '/auth/account_type';
export const getRouteCreateProfile = () => '/create_profile';
export const getRouteCheckUser = () => '/check_user';
export const getRouteRecruterSubscription = () => '/auth/subscription';
export const getRouteDashboard = () => '/dashboard';
export const getRoutePaymentSuccess = () => '/payment/success';
export const getRoutePaymentFailure = () => '/payment/failure';
export const getRouteSearching = () => '/searching';
export const getRouteUIKit = () => '/uikit';
export const getRouteRcruiterProfile = (tab: string) => `/profile/${tab}`;

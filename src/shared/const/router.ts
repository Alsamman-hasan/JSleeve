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
	RECRUCTERSUBSSTATUS = 'recruter_subscription-status',
	DASHBOARD = 'dashboard',
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
export const getRouteAccountDetail = () => '/account_detailes';
export const getRouteCheckUser = () => '/check_user';
export const getRouteRecruterSubscription = () => '/auth/recruter_subscription';
export const getRouteRecruterSubscriptionStatus = () =>
	'/auth/recruter_subscription-statu';
export const getRouteDashboard = () => '/dashboard';
export const getRouteUIKit = () => '/uikit';

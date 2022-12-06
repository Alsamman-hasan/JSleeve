import { RouteProps } from 'react-router-dom';
import { ConfirmEmailPage, ConfirmUserPage } from '@/pages/AuthConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { MainPage } from '@/pages/MainPage';
import { NotfoundPage } from '@/pages/NotFoundPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SIgnUpPage';
import {
	AccountTypePage,
	RecruiterAccountPage,
	RecruterSubscriptionPage,
	RecruterSubsStatusPage,
} from '@/pages/SignUpStepsPages';
import { UiKit } from '@/pages/UiKit/UiKit';
import { DashboardPage } from '@/pages/DashboardPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	SIGNIN = 'signIn',
	SIGNUP = 'signUp',
	CONFIRMEMAIL = 'confirm_email',
	CONFIRMUSER = 'confirm_user',
	FORGOTPASSWORD = 'forgot_password',
	ACCOUNTTYPE = 'account_type',
	ACCOUNTDETAILES = 'account_detailes',
	RECRUCTERSUBS = 'Recruter_subscription',
	RECRUCTERSUBSSTATUS = 'recruter_subscription-status',
	DASHBOARD = 'dashboard',
	// last
	UIKIT = 'uikit',
	NOTFOUND = 'not_found',
}

export const RoutesPaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.UIKIT]: '/uikit',
	[AppRoutes.SIGNIN]: '/auth/signIn',
	[AppRoutes.SIGNUP]: '/auth/signUp',
	[AppRoutes.CONFIRMEMAIL]: '/auth/confirm_email',
	[AppRoutes.CONFIRMUSER]: '/auth/confirm_user',
	[AppRoutes.FORGOTPASSWORD]: '/auth/forgot_password',
	[AppRoutes.ACCOUNTTYPE]: '/auth/account_type',
	[AppRoutes.ACCOUNTDETAILES]: '/account_detailes',
	[AppRoutes.RECRUCTERSUBS]: '/auth/recruter_subscription',
	[AppRoutes.RECRUCTERSUBSSTATUS]: '/auth/recruter_subscription-status',
	[AppRoutes.DASHBOARD]: '/Dashboard',
	[AppRoutes.NOTFOUND]: '*',
};

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutesPaths.main,
		element: <MainPage />,
		authOnly: true,
	},

	[AppRoutes.UIKIT]: {
		path: RoutesPaths.uikit,
		element: <UiKit />,
		authOnly: false,
	},

	[AppRoutes.SIGNIN]: {
		path: RoutesPaths.signIn,
		element: <SignInPage />,
		authOnly: false,
	},

	[AppRoutes.SIGNUP]: {
		path: RoutesPaths.signUp,
		element: <SignUpPage />,
		authOnly: false,
	},

	[AppRoutes.CONFIRMEMAIL]: {
		path: RoutesPaths.confirm_email,
		element: <ConfirmEmailPage />,
		authOnly: true,
	},

	[AppRoutes.CONFIRMUSER]: {
		path: RoutesPaths.confirm_user,
		element: <ConfirmUserPage />,
		authOnly: true,
	},

	[AppRoutes.ACCOUNTTYPE]: {
		path: RoutesPaths.account_type,
		element: <AccountTypePage />,
		authOnly: true,
	},

	[AppRoutes.ACCOUNTDETAILES]: {
		path: RoutesPaths.account_detailes,
		element: <RecruiterAccountPage />,
		authOnly: true,
	},

	[AppRoutes.RECRUCTERSUBS]: {
		path: RoutesPaths.Recruter_subscription,
		element: <RecruterSubscriptionPage />,
		authOnly: true,
	},

	[AppRoutes.RECRUCTERSUBSSTATUS]: {
		path: RoutesPaths['recruter_subscription-status'],
		element: <RecruterSubsStatusPage />,
		authOnly: true,
	},

	[AppRoutes.DASHBOARD]: {
		path: RoutesPaths.dashboard,
		element: <DashboardPage />,
		authOnly: true,
	},

	[AppRoutes.FORGOTPASSWORD]: {
		path: RoutesPaths.forgot_password,
		element: <ForgotPasswordPage />,
		authOnly: false,
	},
	// last
	[AppRoutes.NOTFOUND]: {
		path: RoutesPaths.not_found,
		element: <NotfoundPage />,
	},
};

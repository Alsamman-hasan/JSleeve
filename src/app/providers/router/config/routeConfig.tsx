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
import { CheckUserPage } from '@/pages/CheckUserPage';
import { AppRoutesProps } from '@/shared/types/router';
import {
	AppRoutes,
	getRouteMain,
	getRouteAccountDetail,
	getRouteAccountType,
	getRouteCheckUser,
	getRouteConfirmEmail,
	getRouteConfirmUser,
	getRouteDashboard,
	getRouteForgotPassword,
	getRouteSignIn,
	getRouteRecruterSubscription,
	getRouteRecruterSubscriptionStatus,
	getRouteSignUp,
	getRouteUIKit,
} from '@/shared/const/router';

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
		authOnly: true,
	},

	[AppRoutes.UIKIT]: {
		path: getRouteUIKit(),
		element: <UiKit />,
		authOnly: false,
	},

	[AppRoutes.SIGNIN]: {
		path: getRouteSignIn(),
		element: <SignInPage />,
		authOnly: false,
	},

	[AppRoutes.CHECKUSER]: {
		path: getRouteCheckUser(),
		element: <CheckUserPage />,
		authOnly: false,
	},

	[AppRoutes.SIGNUP]: {
		path: getRouteSignUp(),
		element: <SignUpPage />,
		authOnly: false,
	},

	[AppRoutes.CONFIRMEMAIL]: {
		path: getRouteConfirmEmail(),
		element: <ConfirmEmailPage />,
		authOnly: true,
	},

	[AppRoutes.CONFIRMUSER]: {
		path: getRouteConfirmUser(),
		element: <ConfirmUserPage />,
		authOnly: true,
	},

	[AppRoutes.ACCOUNTTYPE]: {
		path: getRouteAccountType(),
		element: <AccountTypePage />,
		authOnly: true,
	},

	[AppRoutes.ACCOUNTDETAILES]: {
		path: getRouteAccountDetail(),
		element: <RecruiterAccountPage />,
		authOnly: true,
	},

	[AppRoutes.RECRUCTERSUBS]: {
		path: getRouteRecruterSubscription(),
		element: <RecruterSubscriptionPage />,
		authOnly: true,
	},

	[AppRoutes.RECRUCTERSUBSSTATUS]: {
		path: getRouteRecruterSubscriptionStatus(),
		element: <RecruterSubsStatusPage />,
		authOnly: true,
	},

	[AppRoutes.DASHBOARD]: {
		path: getRouteDashboard(),
		element: <DashboardPage />,
		authOnly: true,
	},

	[AppRoutes.FORGOTPASSWORD]: {
		path: getRouteForgotPassword(),
		element: <ForgotPasswordPage />,
		authOnly: false,
	},
	// last
	[AppRoutes.NOTFOUND]: {
		path: '*',
		element: <NotfoundPage />,
	},
};

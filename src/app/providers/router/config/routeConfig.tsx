import { ConfirmEmailPage, ConfirmUserPage } from '@/pages/AuthConfirmPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { MainPage } from '@/pages/MainPage';
import { NotfoundPage } from '@/pages/NotFoundPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SIgnUpPage';
import {
	AccountTypePage,
	RecruterSubscriptionPage,
} from '@/pages/SignUpStepsPages';
import { UiKit } from '@/pages/UiKit/UiKit';
import { DashboardPage } from '@/pages/DashboardPage';
import { CheckUserPage } from '@/pages/CheckUserPage';
import { AppRoutesProps } from '@/shared/types/router';
import {
	AppRoutes,
	getRouteMain,
	getRouteCreateProfile,
	getRouteAccountType,
	getRouteCheckUser,
	getRouteConfirmEmail,
	getRouteConfirmUser,
	getRouteDashboard,
	getRouteForgotPassword,
	getRouteSignIn,
	getRouteRecruterSubscription,
	getRouteSignUp,
	getRouteUIKit,
	getRouteSearch,
	getRoutePaymentFailure,
	getRoutePaymentSuccess,
	getRouteRcruiterProfile,
} from '@/shared/const/router';
import { SearchingPage } from '@/pages/SearchingPage';
import { CreateProfilePage } from '@/pages/CreateProfilePage';
import {
	PaymentFailurePage,
	PaymentSuccessPage,
} from '@/pages/PaymentStatusPage';
import { RecruiterProfilePage } from '@/pages/RecruiterProfilePage';

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
		authOnly: true,
	},

	[AppRoutes.UIKIT]: {
		path: getRouteUIKit(),
		element: <UiKit />,
		authOnly: true,
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
		path: getRouteCreateProfile(),
		element: <CreateProfilePage />,
		authOnly: true,
	},

	[AppRoutes.RECRUCTERSUBS]: {
		path: getRouteRecruterSubscription(),
		element: <RecruterSubscriptionPage />,
		authOnly: true,
	},

	[AppRoutes.PAYMENTSUCCESS]: {
		path: getRoutePaymentSuccess(),
		element: <PaymentSuccessPage />,
		authOnly: true,
	},

	[AppRoutes.PAYMENTFAILURE]: {
		path: getRoutePaymentFailure(),
		element: <PaymentFailurePage />,
		authOnly: true,
	},

	[AppRoutes.DASHBOARD]: {
		path: getRouteDashboard(),
		element: <DashboardPage />,
		authOnly: true,
	},
	[AppRoutes.RECRUITERPROFILE]: {
		path: getRouteRcruiterProfile('myAccount'),
		element: <RecruiterProfilePage />,
		authOnly: true,
	},

	[AppRoutes.SEARCH]: {
		path: getRouteSearch(),
		element: <SearchingPage />,
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

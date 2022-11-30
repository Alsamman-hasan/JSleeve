import { ConfirmEmailPage } from 'pages/ConfirmEmailPage';
import { MainPage } from 'pages/MainPage';
import { NotfoundPage } from 'pages/NotFoundPage';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SIgnUpPage';
import { UiKit } from 'pages/UiKit/UiKit';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  SIGNIN = 'signIn',
  SIGNUP = 'signUp',
  CONFIRMEMAIL = 'confirm_email',

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
  [AppRoutes.NOTFOUND]: '*',
};

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
    authOnly: false,
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
  // last
  [AppRoutes.NOTFOUND]: {
    path: RoutesPaths.not_found,
    element: <NotfoundPage />,
  },
};

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
  // last
  UIKIT = 'uikit',
  NOTFOUND = 'not_found',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.UIKIT]: '/uikit',
  [AppRoutes.SIGNIN]: '/signIn',
  [AppRoutes.SIGNUP]: '/signUp',
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
  // last
  [AppRoutes.NOTFOUND]: {
    path: RoutesPaths.not_found,
    element: <NotfoundPage />,
  },
};

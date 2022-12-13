/* eslint-disable react/jsx-props-no-spreading */
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'oidc-react';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routesConfig } from '../config/routeConfig';

const AppRouter = ({ oidcConfig }: any) => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>{route.element}</Suspense>
		);
		return (
			<Route
				key={route.path}
				element={
					route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
				}
				path={route.path}
			/>
		);
	}, []);

	return (
		<AuthProvider {...oidcConfig}>
			<Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>
		</AuthProvider>
	);
};

export default memo(AppRouter);

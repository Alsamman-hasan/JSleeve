/* eslint-disable react/jsx-props-no-spreading */
import { memo, Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'oidc-react';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routesConfig } from '../config/routeConfig';
import { oidcConfig } from '@/app/api/oidConfig';

const AppRouter = () => {
	const config = useMemo(() => {
		return oidcConfig;
	}, []);
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
		<AuthProvider {...config}>
			<Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>
		</AuthProvider>
	);
};

export default memo(AppRouter);

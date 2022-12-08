// import { lazy } from 'react';

// export const DashboardPageAsync = lazy(() => import('./DashboardPage'));

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const DashboardPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./DashboardPage')), 100);
		})
);

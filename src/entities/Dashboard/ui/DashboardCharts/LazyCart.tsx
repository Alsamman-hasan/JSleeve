import { lazy } from 'react';

// export const Chart = lazy(() => import('./Chart'));

export const Chart = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./Chart')), 2000);
		})
);

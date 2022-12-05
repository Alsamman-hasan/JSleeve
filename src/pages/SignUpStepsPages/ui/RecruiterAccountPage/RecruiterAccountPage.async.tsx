import { lazy } from 'react';

export const RecruiterAccountPageAsync = lazy(
	() => import('./RecruiterAccountPage')
);

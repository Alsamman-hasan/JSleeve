import { lazy } from 'react';

export const RecruiterProfilePageAsync = lazy(
	() => import('./RecruiterProfilePage')
);

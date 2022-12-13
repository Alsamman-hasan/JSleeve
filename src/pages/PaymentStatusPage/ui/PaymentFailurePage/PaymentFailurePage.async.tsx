import { lazy } from 'react';

export const PaymentFailurePageAsync = lazy(
	() => import('./PaymentFailurePage')
);

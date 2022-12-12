import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'oidc-react';
import { getRouteSignIn } from '@/shared/const/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
	// const auth = useSelector(getUserAuthData);
	const auth = useAuth();
	const location = useLocation();

	if (!auth) {
		return (
			<Navigate to={getRouteSignIn()} state={{ from: location }} replace />
		);
	}

	return children;
}

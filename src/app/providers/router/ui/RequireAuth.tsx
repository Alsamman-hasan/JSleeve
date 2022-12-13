import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextProps, useAuth } from 'oidc-react';
import { getRouteSignIn } from '@/shared/const/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
	const auth: AuthContextProps = useAuth();
	const location = useLocation();
	const authData = auth.userData;
	if (!auth && !authData) {
		return (
			<Navigate to={getRouteSignIn()} state={{ from: location }} replace />
		);
	}
	return children;
}

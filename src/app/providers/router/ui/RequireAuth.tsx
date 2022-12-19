import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextProps, useAuth } from 'oidc-react';
import { getRouteSignIn } from '@/shared/const/router';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

export function RequireAuth({ children }: { children: JSX.Element }) {
	const auth: AuthContextProps = useAuth();
	const location = useLocation();
	const authData = auth.userData;
	useInitialEffect(() => {
		const token = localStorage.getItem('tokenId');
		if (!token) auth.signIn();
	});
	if (!auth && !authData) {
		return (
			<Navigate to={getRouteSignIn()} state={{ from: location }} replace />
		);
	}
	return children;
}

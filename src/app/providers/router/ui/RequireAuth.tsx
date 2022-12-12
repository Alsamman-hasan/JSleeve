import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteSignIn } from '@/shared/const/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
	// const auth = useSelector(getUserAuthData);
	const auth = true;
	const location = useLocation();

	if (!auth) {
		return (
			<Navigate to={getRouteSignIn()} state={{ from: location }} replace />
		);
	}

	return children;
}

import { memo, Suspense } from 'react';
import { AuthProviderProps, User } from 'oidc-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter.tsx';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { AuthDataActions } from '@/entities/AuthData';

export const App = memo(() => {
	const dispatch = useAppDispatch();
	const authority = import.meta.env.VITE_AUTHORITY;
	const clientId = import.meta.env.VITE_CLIENT_ID;

	const oidcConfig = {
		onSignIn: async (userData: User | null): Promise<void> => {
			if (userData?.id_token) {
				// dispatch(AuthDataActions.setAuthData(userData as any));
				// localStorage.setItem('tokenId', userData?.id_token);
			}
		},
		onSignOut: async () => {
			localStorage.removeItem('tokenId');
		},
		authority: `${authority}`,
		clientId: `${clientId}`,
		responseType: 'code',
		redirectUri: __IS_DEV__
			? 'http://localhost:3000/check_user'
			: 'https://sparta-dev.jsleeve.com/',
		scope: `${import.meta.env.VITE_SCOPE}`,
	};

	return (
		<div className={classNames('app', {}, ['app_light_theme'])}>
			<Suspense fallback="">
				<AppRouter oidcConfig={oidcConfig as AuthProviderProps} />
			</Suspense>
		</div>
	);
});

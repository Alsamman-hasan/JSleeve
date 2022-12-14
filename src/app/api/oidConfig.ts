import { User } from 'oidc-react';

const authority = import.meta.env.VITE_AUTHORITY;
const clientId = import.meta.env.VITE_CLIENT_ID;

export const oidcConfig = {
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
		? `${window.location.origin}/check_user`
		: 'https://sparta-dev.jsleeve.com/check_user',
	scope: `${import.meta.env.VITE_SCOPE}`,
};

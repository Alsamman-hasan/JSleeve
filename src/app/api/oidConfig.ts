import { User } from 'oidc-react';

// const authority = import.meta.env.VITE_AUTHORITY;
// const clientId = import.meta.env.VITE_CLIENT_ID;

export const oidcConfig = {
	onSignIn: async (userData: User | null): Promise<void> => {
		if (userData?.id_token) {
			// dispatch(AuthDataActions.setAuthData(userData as any));
			// localStorage.setItem('tokenId', userData?.id_token);
		}
	},
	onSignOut: async () => {
		localStorage.clear();
		sessionStorage.clear();
	},
	authority: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Z0qJkBONc`,
	clientId: `4f216ilffu3mescr9j5bp2dm7r`,
	responseType: 'code',
	redirectUri: __IS_DEV__
		? `${window.location.origin}/check_user`
		: 'https://sparta-dev.jsleeve.com/check_user',
	scope: `openid profile email`,
};

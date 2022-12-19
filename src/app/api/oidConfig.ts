import { User, UserManager } from 'oidc-react';

// const authority = import.meta.env.VITE_AUTHORITY;
// const clientId = import.meta.env.VITE_CLIENT_ID;

export const oidcConfig = {
	// onSignIn: async (userData: User | null): Promise<void> => {
	// 	if (userData?.id_token) {
	// 		// dispatch(AuthDataActions.setAuthData(userData as any));
	// 		// localStorage.setItem('tokenId', userData?.id_token);
	// 	}
	// },
	authority: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Z0qJkBONc`,
	clientId: `4f216ilffu3mescr9j5bp2dm7r`,
	responseType: 'code',
	redirectUri: __IS_DEV__
		? `${window.location.origin}/check_user`
		: 'https://sparta-dev.jsleeve.com/check_user',
	scope: `openid profile email`,
	// revokeAccessTokenOnSignout: true,
	// automaticSilentRenew: true,
	// filterProtocolClaims: true,
	// loadUserInfo: true,
	// metadata: {
	// 	issuer: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Z0qJkBONc',
	// 	authorization_endpoint: `https://idp-dev.jsleeve.com/oauth2/authorize`,
	// 	token_endpoint: `https://idp-dev.jsleeve.com/oauth2/token`,
	// 	jwks_uri:
	// 		'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Z0qJkBONc/.well-known/jwks.json',
	// 	end_session_endpoint: `https://idp-dev.jsleeve.com/oauth2/logout`,
	// },
};

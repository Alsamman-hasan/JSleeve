const authority = import.meta.env.VITE_AUTHORITY;
const clientId = import.meta.env.VITE_CLIENT_ID;

export const oidcConfig = {
	onSignIn: async (user: any) => {
		localStorage.setItem('tokenId', user.id_token);
	},
	// authority: `${authority}`,
	// clientId: `${clientId}`,
	// responseType: 'code',
	// redirectUri: 'http://localhost:3000/check_user',
	// scope: 'openid profile email',
	authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Z0qJkBONc',
	clientId: '4f216ilffu3mescr9j5bp2dm7r',
	responseType: 'code',
	redirectUri: 'http://localhost:3000/check_user',
	scope: 'openid profile email',
	// autoSignIn: false,
	// acr_values: 'Level3',
	// ui_locales: 'nb',
	// loadUserInfo: false,
	// revokeAccessTokenOnSignout: true,
};

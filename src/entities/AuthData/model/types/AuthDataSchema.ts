import { User } from 'oidc-react';

export interface AuthDataSchema {
	user: User | undefined;
	token: string | undefined;
}

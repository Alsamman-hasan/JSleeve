import { StateSchema } from '@/app/providers/StorProvider';

export const getAuthData = (state: StateSchema) => state.userAuthData.user;

import { StateSchema } from '@/app/providers/StorProvider';

export const getUserType = (state: StateSchema) => state.userType.userType;

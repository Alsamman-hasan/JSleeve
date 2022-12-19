import { StateSchema } from '@/app/providers/StorProvider';

export const getLinks = (state: StateSchema) => state.links.link;

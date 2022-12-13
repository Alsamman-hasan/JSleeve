import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StateSchema } from '@/app/providers/StorProvider';

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers, { getState }) => {
			const token =
				(getState() as StateSchema).userAuthData.user?.id_token ||
				localStorage.getItem('tokenId');
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});

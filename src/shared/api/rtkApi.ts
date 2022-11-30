import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { StateSchema } from 'app/providers/StorProvider';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    // prepareHeaders: (headers, { getState }) => {
    //   const { token } = (getState() as StateSchema).auth;
    //   if (token) {
    //     headers.set('authentication', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({}),
});

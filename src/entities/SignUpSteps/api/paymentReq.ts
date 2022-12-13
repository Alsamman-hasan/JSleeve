import { rtkApi } from '@/shared/api/rtkApi';

enum Types {
	type = 'type',
}
type Body = Record<Types, string>;

interface PayloadType {
	reqBody: Body;
	userType: string;
}
type Response = Record<string, string>;

const paymentTypeApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		athletePaymentType: build.mutation<Response, Partial<PayloadType>>({
			query: (payload) => {
				return {
					url: `${payload.userType}/payments/checkout`,
					method: 'POST',
					body: payload.reqBody,
				};
			},
		}),
	}),
});

export const useAthletePaymentType =
	paymentTypeApi.useAthletePaymentTypeMutation;

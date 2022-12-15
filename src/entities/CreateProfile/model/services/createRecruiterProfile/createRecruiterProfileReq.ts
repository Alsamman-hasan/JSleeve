import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { RecruiterProfile } from '../../types/recruiterProfile';
import { getRecruiterData } from '../../selectors/getRecruiterProfileData/getRecruiterProfileData';
import { validateProfileData } from './validationForm';

interface Iresponse {
	data: any;
}
export const createRecruiterProfileReq = createAsyncThunk<
	any,
	void,
	ThunkConfig<string>
>(
	'auth/createRecruiterProfile',
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const body = getRecruiterData(getState());
			const errors = validateProfileData(body as RecruiterProfile);

			if (errors.length) {
				return rejectWithValue('Pleace fill required inputs');
			}
			const response = await extra.api.post<Iresponse>(
				`recruiter/profile`,
				body
			);
			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e: any) {
			return rejectWithValue(e.response.data.error.code);
		}
	}
);

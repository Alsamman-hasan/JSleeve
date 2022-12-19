import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getRecruiterAvatar } from '../../selectors/getRecruiterProfileData/getRecruiterProfileData';

interface Iresponse {
	data: any;
}

export const createProfileAvatarReq = createAsyncThunk<
	any,
	void,
	ThunkConfig<string>
>(
	'auth/profileAvatar',
	async (userType, { extra, rejectWithValue, getState }) => {
		try {
			const body = getRecruiterAvatar(getState());

			const response = await extra.api.post<Iresponse>(
				`recruiter/profile/picture`,
				body
			);
			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	}
);

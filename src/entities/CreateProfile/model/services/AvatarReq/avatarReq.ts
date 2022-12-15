import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getRecruiterAvatar } from '../../selectors/getRecruiterProfileData/getRecruiterProfileData';
import { getAthleteAvatar } from '../../selectors/getAthleteProfileData /geAthleteProfileData';

interface Iresponse {
	data: any;
}
type userTypes = 'recruiter' | 'athlete';
export const createProfileAvatarReq = createAsyncThunk<
	any,
	userTypes,
	ThunkConfig<string>
>(
	'auth/profileAvatar',
	async (userType, { extra, rejectWithValue, getState }) => {
		try {
			const body =
				userType === 'recruiter'
					? getRecruiterAvatar(getState())
					: getAthleteAvatar(getState());

			const response = await extra.api.post<Iresponse>(
				`${userType}/profile/picture`,
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

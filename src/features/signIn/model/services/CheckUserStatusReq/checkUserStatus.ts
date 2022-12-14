import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { Athlete, Recruiter } from '../../types/checkUserSchems';

interface UserType {
	athlete: Athlete | null;
	recruiter: Recruiter | null;
}
export const fetchUserType = createAsyncThunk<
	UserType,
	void,
	ThunkConfig<string>
>('auth/userType', async (articleId, { extra, rejectWithValue, getState }) => {
	try {
		const token = getState().userAuthData.user;
		extra.api.interceptors.request.use((config) => {
			if (config.headers && token) {
				config.headers.Authorization = `Bearer ${token.id_token}`;
			}
			return config;
		});
		const response = await extra.api.get<UserType>(`user/status`);
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
});

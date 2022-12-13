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
>('auth/userType', async (articleId, { extra, rejectWithValue }) => {
	try {
		const response = await extra.api.get<UserType>(`user/status`);
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
});

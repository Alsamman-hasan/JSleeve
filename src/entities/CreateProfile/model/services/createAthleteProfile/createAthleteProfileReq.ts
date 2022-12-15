import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getAthleteData } from '../../selectors/getAthleteProfileData /geAthleteProfileData';

interface Iresponse {
	data: any;
}
export const createAthleteProfileReq = createAsyncThunk<
	any,
	void,
	ThunkConfig<string[]>
>(
	'auth/createAthleteProfile',
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const body = getAthleteData(getState());
			const response = await extra.api.post<Iresponse>(`athlete/profile`, body);
			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e: any) {
			if (e.response.data.error.response.statusCode === 401) {
				localStorage.removeItem('tokenId');
				sessionStorage.clear();
				localStorage.clear();
				window.location.reload();
				return rejectWithValue(['Unauthorized']);
			}
			return rejectWithValue(e.response.data.error.response.message);
		}
	}
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { SearchResponse } from '../types/searchTypes';
import { getSearchAthleteData } from '../selectors/getSearchData';

export const searchAthleteReq = createAsyncThunk<
	SearchResponse,
	void,
	ThunkConfig<string[]>
>(
	'recruiter/searchAthlete',
	async (porps, { extra, rejectWithValue, getState }) => {
		try {
			const paramsData = getSearchAthleteData(getState());
			if (!paramsData) {
				return rejectWithValue(['Pleace fill required inputs']);
			}
			const response = await extra.api.get<SearchResponse>(
				`recruiter/athletes`,
				{
					params: paramsData,
				}
			);
			return response.data;
		} catch (e: any) {
			return rejectWithValue(e.response.data.error.code);
		}
	}
);

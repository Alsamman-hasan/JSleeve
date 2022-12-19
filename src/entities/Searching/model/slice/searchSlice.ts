import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchData, SearchSchema } from '../types/searchTypes';

const initialState: SearchSchema = {
	error: '',
	isLoading: false,
	searchData: undefined,
};

export const searchSlice = createSlice({
	name: 'userType',
	initialState,
	reducers: {
		setSearchData: (state, { payload }: PayloadAction<SearchData>) => {
			state.searchData = payload;
		},
	},
});

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;

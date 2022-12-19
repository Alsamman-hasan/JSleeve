import { createSlice } from '@reduxjs/toolkit';
import { LinksSchema } from '../types/linksTypes';

const initialState: LinksSchema = {
	link: '',
};

const linksSlice = createSlice({
	name: 'links',
	initialState,
	reducers: {
		setLink: (state, { payload }) => {
			state.link = payload;
		},
		removeLink: (state) => {
			state.link = undefined;
		},
	},
});

export const { actions: linksActions } = linksSlice;
export const { reducer: linksReducer } = linksSlice;

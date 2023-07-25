import { createSlice } from '@reduxjs/toolkit';

export const COUNTRY_ARTICLES_INITIAL_STATE = {
	currentCountryArticles: null,
};

export const countryArticlesSlice = createSlice({
	name: 'country',
	initialState: COUNTRY_ARTICLES_INITIAL_STATE,
	reducers: {
		setCurrentCountryArticles(state, action) {
			state.currentCountryArticles = action.payload;
		},
	},
});

export const { setCurrentCountryArticles } = countryArticlesSlice.actions;

export const countryArticlesReducer = countryArticlesSlice.reducer;

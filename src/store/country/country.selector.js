import { createSelector } from 'reselect';

export const selectCountryArticlesReducer = (state) =>
	state.country.currentCountryArticles;

export const selectCountryArticlesIsLoading = (state) =>
	state.country.isLoading;

export const selectCountryArticlesError = (state) => state.country.error;
// export const selectTotalArticles = createSelector(
// 	[selectCountryArticlesReducer],
// 	(countrySlice) => countrySlice.totalResults
// );

// export const selectCountryArticles = createSelector(
// 	[selectCountryArticlesReducer],
// 	(countrySlice) => countrySlice.articles
// );

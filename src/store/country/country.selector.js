import { createSelector } from 'reselect';

export const selectCountryArticlesReducer = (state) =>
	state.country.currentCountryArticles;

export const selectTotalArticles = createSelector(
	[selectCountryArticlesReducer],
	(countrySlice) => countrySlice.totalResults
);

// export const selectCountryArticles = createSelector(
// 	[selectCountryArticlesReducer],
// 	(countrySlice) => countrySlice.articles
// );

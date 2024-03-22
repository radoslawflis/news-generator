import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

export const selectCountryArticlesReducer = (state: RootState) =>
	state.country.currentCountryArticles;

export const selectCountryArticlesIsLoading = (state: RootState) =>
	state.country.isLoading;

export const selectCountryArticlesError = (state: RootState) => state.country.error;

export const selectTotalArticles = createSelector(
	[selectCountryArticlesReducer],
	(countrySlice) => countrySlice.totalArticles
);

export const selectCountryArticles = createSelector(
	[selectCountryArticlesReducer],
	(countrySlice) => countrySlice.articles
);

import { combineReducers } from '@reduxjs/toolkit';

import { countryArticlesReducer } from './country/country.slice';

export const rootReducer = combineReducers({
	country: countryArticlesReducer,
});

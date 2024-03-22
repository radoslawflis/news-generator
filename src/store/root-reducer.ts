import { combineReducers } from '@reduxjs/toolkit';

import { countryArticlesReducer } from './country/country.slice';
import { viewSettingReducer } from './view-setting/view-setting.slice';

export const rootReducer = combineReducers({
	country: countryArticlesReducer,
	viewSetting: viewSettingReducer,
});

export type RootState = ReturnType<typeof rootReducer>
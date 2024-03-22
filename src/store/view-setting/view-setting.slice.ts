import { createSlice } from '@reduxjs/toolkit';

export const VIEW_SETTING_INITIAL_STATE = {
	viewSetting: true,
};

export const viewSettingSlice = createSlice({
	name: 'viewSetting',
	initialState: VIEW_SETTING_INITIAL_STATE,
	reducers: {
		setViewSetting(state) {
			state.viewSetting = !state.viewSetting;
		},
	},
});

export const { setViewSetting } = viewSettingSlice.actions;

export const viewSettingReducer = viewSettingSlice.reducer;

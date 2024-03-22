import { RootState } from "../root-reducer";

export const selectViewSetting = (state: RootState) => state.viewSetting.viewSetting;

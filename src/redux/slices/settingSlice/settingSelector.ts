import { RootState } from "@redux/store";

export default {
  getOpenDrawer: (state: RootState) => state.setting.isOpenDrawer,
};

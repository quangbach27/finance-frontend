import { RootState } from "@redux/store";

export default {
  getUserInfo: (state: RootState) => state.auth.userInfo,
};

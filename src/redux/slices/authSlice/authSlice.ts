import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  refreshToken: "",
  userInfo: {
    username: "Quang Bach",
    avarta: "",
    role: "user",
    houseId: 1,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

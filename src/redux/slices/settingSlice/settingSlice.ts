import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDrawer: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isOpenDrawer = !state.isOpenDrawer;
    },
  },
});

export const settingCreator = settingSlice.actions;

export default settingSlice.reducer;

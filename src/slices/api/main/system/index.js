import { createSlice } from "@reduxjs/toolkit";
import { getSystemMenuFunctionList, getSystemRole } from "./indexHelper";

//初始值
const initialState = {
  menuFunctionList: [],
  roleList: [],
};

const apiSystemSlice = createSlice({
  name: "apiSystem",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSystemMenuFunctionList.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.menuFunctionList = data;
    });
    builder.addCase(getSystemRole.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.roleList = data;
    });
  },
});

export default apiSystemSlice.reducer;

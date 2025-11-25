import { createSlice } from "@reduxjs/toolkit";
import { getRevenueDaily, getRevenueMonthlyDownload } from "./indexHelper";

//初始值
const initialState = {
  dailyList: [],
};

const apiRevenueSlice = createSlice({
  name: "apiRevenue",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRevenueDaily.fulfilled, (state, action) => {
      const { list } = action.payload;
      state.dailyList = list;
    });
    builder.addCase(getRevenueMonthlyDownload.fulfilled, (state, action) => {
      const downLink = action.payload;
      window.location.href = downLink;
    });
  },
});

export default apiRevenueSlice.reducer;

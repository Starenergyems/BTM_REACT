import { createSlice } from "@reduxjs/toolkit";
import { getEdregDemand, getEtpPricing } from "./indexHelper";

//初始值
const initialState = {
  list: [],
  demandCurveList: [],
};

const investmentStrategySlice = createSlice({
  name: "investmentStrategy",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEtpPricing.fulfilled, (state, action) => {
      const { list } = action.payload;
      state.list = list;
    });
    builder.addCase(getEdregDemand.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.demandCurveList = data;
    });
  },
});

export default investmentStrategySlice.reducer;

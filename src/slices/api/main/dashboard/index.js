import { createSlice } from "@reduxjs/toolkit";
import {
  getDashboardBidInfo,
  getDashboardRevenueOverview,
  getDashboardSiteInfoOperationMonitoring,
  getDashboardSiteInfoTodayInfo,
  getDashboardServiceQuality,
} from "./indexHelper";

//初始值
const initialState = {
  isServiceQualityPending: true,
  list: [],
  totalCapacity: 0,
  totalCapacityUnit: "M",
  bidCapacity: 0,
  bidCapacityUnit: "M",
  winningRate: 0,
  winningList: [],
  todayCharge: 0,
  todayChargeUnit: "",
  totalCharge: 0,
  totalChargeUnit: "",
  todayDischarge: 0,
  todayDischargeUnit: "",
  totalDischarge: 0,
  totalDischargeUnit: "",
  serviceQuality: [],
  soc: 0,
  rte: 0,
  revenueOverviewList: [],
  estimateMonth: 0,
  estimateToday: 0,
  suggestMax: 0,
  suggestMin: 0,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDashboardBidInfo.fulfilled, (state, action) => {
      const {
        totalCapacity,
        totalCapacityUnit,
        bidCapacity,
        bidCapacityUnit,
        winningRate,
        winningList,
      } = action.payload;
      state.totalCapacity = totalCapacity;
      state.totalCapacityUnit = totalCapacityUnit;
      state.bidCapacity = bidCapacity;
      state.bidCapacityUnit = bidCapacityUnit;
      state.winningRate = winningRate;
      state.winningList = winningList;
    });
    builder.addCase(getDashboardRevenueOverview.fulfilled, (state, action) => {
      const { list, estimateMonth, estimateToday, suggestMax, suggestMin } =
        action.payload;
      state.revenueOverviewList = list;
      state.estimateMonth = estimateMonth;
      state.estimateToday = estimateToday;
      state.suggestMax = suggestMax;
      state.suggestMin = suggestMin;
    });
    builder.addCase(
      getDashboardSiteInfoOperationMonitoring.fulfilled,
      (state, action) => {
        const { list } = action.payload;
        state.list = list;
      }
    );
    builder.addCase(
      getDashboardSiteInfoTodayInfo.fulfilled,
      (state, action) => {
        for (const key in action.payload) {
          if (key !== "message" && key !== "statusCode") {
            state[key] = action.payload[key];
          }
        }
      }
    );
    builder.addCase(getDashboardServiceQuality.fulfilled, (state, action) => {
      const { serviceQuality, soc, rte } = action.payload;
      state.serviceQuality = serviceQuality;
      state.soc = soc;
      state.rte = rte;
      state.isServiceQualityPending = false;
    });
    builder.addCase(getDashboardServiceQuality.rejected, (state) => {
      state.isServiceQualityPending = false;
    });
  },
});

export default dashboardSlice.reducer;

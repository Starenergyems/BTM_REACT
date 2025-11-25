import { createSlice } from "@reduxjs/toolkit";
import {
  postBidPredictionDownload,
  postBidPredictionSearch,
} from "./indexHelper";

const { VITE_API_BASEURL } = import.meta.env;

//初始值
const apiBidPredictionState = {
  apiStatus: "",
  dates: [],
  lastUpdateDate: "",
  predictions: [],
};

const apiBidPredictionSlice = createSlice({
  name: "apiBidPrediction",
  initialState: apiBidPredictionState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postBidPredictionSearch.fulfilled, (state, action) => {
      const { dates, lastUpdateDate, predictions } = action.payload;
      state.dates = dates;
      state.lastUpdateDate = lastUpdateDate;
      state.predictions = predictions;
      state.apiStatus = "success";
    });
    builder.addCase(postBidPredictionSearch.pending, (state) => {
      state.apiStatus = "pending";
    });
    builder.addCase(postBidPredictionDownload.fulfilled, (_state, action) => {
      const { csvUrl } = action.payload;
      window.location.href = `${VITE_API_BASEURL}${csvUrl}`.replace(
        "/api/v2/",
        "/"
      );
    });
  },
});

export default apiBidPredictionSlice.reducer;

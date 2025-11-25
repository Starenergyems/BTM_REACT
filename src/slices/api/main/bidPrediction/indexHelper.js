import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/slices/api/setting";

const postBidPredictionSearch = createAsyncThunk(
  "bidPrediction/postBidPredictionSearch",
  async ({ data, config }) => {
    const fetchData = await api.post("bid_prediction/search", data, config);
    return fetchData.data;
  }
);
const postBidPredictionDownload = createAsyncThunk(
  "bidPrediction/postBidPredictionDownload",
  async ({ data, config }) => {
    const fetchData = await api.post("bid_prediction/download", data, config);
    return fetchData.data;
  }
);

export { postBidPredictionSearch, postBidPredictionDownload };

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/slices/api/setting";

const getAbnormalEvents = createAsyncThunk(
  "abnormalEvents/abnormal_events",
  async ({ config } = {}) => {
    const fetchData = await api.get("abnormal_events", config);
    return fetchData.data;
  }
);

export { getAbnormalEvents };

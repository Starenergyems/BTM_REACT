import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { api } from "@/slices/api/setting";

//營運報表日報
const getRevenueDaily = createAsyncThunk(
  "revenue/getRevenueDaily",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(`revenue/daily?${queryStringData}`, config);
    return fetchData.data;
  }
);
const getRevenueMonthly = createAsyncThunk(
  "revenue/getRevenueMonthly",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `revenue/monthly?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const getRevenueMonthlyDownload = createAsyncThunk(
  "revenue/getRevenueMonthlyDownload",
  async ({ data }) => {
    const queryStringData = queryString.stringify(data);
    const downloadLink = `${api.defaults.baseURL}revenue/monthly/download?${queryStringData}`;
    return downloadLink;
  }
);

export { getRevenueDaily, getRevenueMonthly, getRevenueMonthlyDownload };

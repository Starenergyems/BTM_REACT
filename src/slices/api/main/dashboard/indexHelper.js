import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { api } from "@/slices/api/setting";

const getDashboardBidInfo = createAsyncThunk(
  "dashboard/getDashboardBidInfo",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `dashboard/bid_info?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const getDashboardRevenueOverview = createAsyncThunk(
  "dashboard/getDashboardRevenueOverview",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `dashboard/revenue_overview?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const getDashboardServiceQuality = createAsyncThunk(
  "dashboard/getDashboardServiceQuality",
  async ({ config } = {}) => {
    const fetchData = await api.get("dashboard/service_quality", config);
    return fetchData.data;
  }
);
const getDashboardSiteInfoOperationMonitoring = createAsyncThunk(
  "dashboard/getDashboardSiteInfoOperationMonitoring",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `dashboard/site_info/operation_monitoring?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const getDashboardSiteInfoTodayInfo = createAsyncThunk(
  "dashboard/getDashboardSiteInfoTodayInfo",
  async ({ config } = {}) => {
    const fetchData = await api.get("dashboard/site_info/today_info", config);
    return fetchData.data;
  }
);

export {
  getDashboardBidInfo,
  getDashboardRevenueOverview,
  getDashboardServiceQuality,
  getDashboardSiteInfoOperationMonitoring,
  getDashboardSiteInfoTodayInfo,
};

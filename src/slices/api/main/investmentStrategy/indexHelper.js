import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { api } from "@/slices/api/setting";

const getEtpPricing = createAsyncThunk(
  "investmentStrategy/getEtpPricing",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `investment_strategy/etp_pricing?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const getEdregDemand = createAsyncThunk(
  "investmentStrategy/getEdregDemand",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `investment_strategy/edreg_demand?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);

export { getEdregDemand, getEtpPricing };

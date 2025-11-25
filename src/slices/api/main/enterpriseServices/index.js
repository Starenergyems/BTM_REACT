import { createSlice } from "@reduxjs/toolkit";
import { getEnterpriseServicesCompanies } from "./indexHelper";

//初始值
const initialState = {
  companies: [],
};

const enterpriseServicesSlice = createSlice({
  name: "enterpriseServices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getEnterpriseServicesCompanies.fulfilled,
      (state, action) => {
        const { companies } = action.payload;
        state.companies = companies;
      }
    );
  },
});

export default enterpriseServicesSlice.reducer;

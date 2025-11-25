import { createSlice } from "@reduxjs/toolkit";
import { getAbnormalEvents } from "./indexHelper";

//初始值
const abnormalEvents = {
  abnormalEvents: [],
};

const accountsSlice = createSlice({
  name: "abnormalEvents",
  initialState: abnormalEvents,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAbnormalEvents.fulfilled, (state, action) => {
      const { abnormalEvents } = action.payload;
      state.abnormalEvents = abnormalEvents;
    });
  },
});

export default accountsSlice.reducer;

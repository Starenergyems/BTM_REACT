import { createSlice } from "@reduxjs/toolkit";
import { color } from "@/styles/variable/indexStyle";

//初始值
const layoutState = {
  background: `linear-gradient(180deg, #596f7c, ${color.themeBlack})`,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutState,
  reducers: {
    setBackground(state, action) {
      state.background = action.payload;
    },
  },
});

export const { setBackground } = layoutSlice.actions;
export default layoutSlice.reducer;

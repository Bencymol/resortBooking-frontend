import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resortBookingData: {},
  optionData: {},
};

const bookingSlice = createSlice({
  name: "bookingRD",
  initialState,
  reducers: {
    setResortBookingData: (state, action) => {
      state.resortBookingData = action.payload;
    },
    setOptionData: (state, action) => {
      state.optionData = action.payload;
    },
  },
});

export const { setResortBookingData, setOptionData } = bookingSlice.actions;
export default bookingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resortBookingData: {},
};

const bookingSlice = createSlice({
  name: "bookingRD",
  initialState,
  reducers: {
    setResortBookingData: (state, action) => {
      state.resortBookingData = action.payload;
    },
  },
});

export const { setResortBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;

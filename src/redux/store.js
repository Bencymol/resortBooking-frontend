import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import bookingReduser from "./bookingSlice";

export const store = configureStore({
  reducer: {
    navbarRD: navbarReducer,
    bookingRD: bookingReduser,
  },
});

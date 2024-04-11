import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupVisible: true,
};

const navbarSlice = createSlice({
  name: "navbarRD",
  initialState,
  reducers: {
    setSignupVisibleFalse: state => {
      state.signupVisible = false;
    },
    setSignupVisibleTrue: state => {
      state.signupVisible = true;
    },
  },
});

export const { setSignupVisibleFalse, setSignupVisibleTrue } =
  navbarSlice.actions;
export default navbarSlice.reducer;

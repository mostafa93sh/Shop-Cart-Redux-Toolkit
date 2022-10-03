import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisiable: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisiable = !state.cartIsVisiable;
    },
    showNotification(state, actions) {
      state.notification = {
        status: actions.payload.status,
        title: actions.payload.title,
        message: actions.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;

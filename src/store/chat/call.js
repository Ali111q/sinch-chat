import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showCall: false,
  callType: "voicecall",
  showMinScreen: false,
};

const call = createSlice({
  name: "replay",
  initialState,
  reducers: {
    setShowCall: (state, action) => {
      state.showCall = action.payload.showCall;
    },
    setCallType: (state, action) => {
      console.log(action.payload.callType);
      state.callType = action.payload.callType;
    },
    setMinScreen: (state, action) => {
      state.showMinScreen = action.payload.minScreen;
    },
  },
});

export const callAction = call.actions;
export default call.reducer;

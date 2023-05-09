import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    io:null,
    Message:{},
    typing:false,
    error:{},
    sentChat:{},
    receivedChat:{},
  },
};
const channel = createSlice({
  name: "channel",
  initialState,
  reducers: {
    io(state,action){
      state.data.io=action.payload
    },
    new(state,action){
        state.data={
            ...state.data,
            ...action.payload
        }
    }
  },
});

export const channelAction = channel.actions;
export default channel.reducer;

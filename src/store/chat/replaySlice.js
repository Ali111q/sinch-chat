import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  body: null,
  type: null,
  file_url: null,
  is_sender: null,
};

const ReplaySlice = createSlice({
  name: "replay",
  initialState,
  reducers: {
    setReplay: (state, action) => {
      const { id, body, type, is_sender, file_url } = action.payload;
      console.log(file_url)
      state.id = id;
      state.file_url = file_url;
      state.body = body;
      state.type = type;
      state.is_sender = is_sender
    },
    cancelRepaly: (state, action) => {
      state.id = null;
      state.body = null;
      state.type = null;
    },
  },
});

export const { setReplay, cancelRepaly } = ReplaySlice.actions;
export default ReplaySlice.reducer;

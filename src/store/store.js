import { configureStore } from "@reduxjs/toolkit";
import chat from "./chat/chatSlice";
import ReplaySlice from "./chat/replaySlice";
import channel from "./chat/channel";
import call from "./chat/call";
const store = configureStore({
  reducer: {
    chat,
    replay: ReplaySlice,
    channel,
    call,
  },
});
export default store;

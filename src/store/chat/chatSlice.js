import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    inputVal: "",
    io: null,
    chats: [],
    chatData: {
      chat_id: -1,
      user: {
        id: 0,
        image: "http://192.168.12.200/placeholder.jpg",
        name: "",
      },
      messages: [],
    },
  },
  messageContextID: null,
  firstChatID: null,
  chatRightMenu: {
    userID: null,
    chatID: null,
  },
};
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatsList: (state, action) => {
      state.data.chats = action.payload.chats;
      console.log(state.data.chats);
    },
    addChats(state, action) {
      state.data.chats = [...state.data.chats, action.payload];
    },
    selectChat(state, action) {
      const data = action.payload;
      console.log(action.payload)
      state.data.chatData = {
        chat_id: data.chat_id,
        user: data.user,
        messages: data.messages,
      };
    },
    io(state, action) {
      state.data.io = action.payload;
    },
    setVal(state, action) {
      state.data.inputVal = action.payload;
    },
    addMS(state, action) {
      const data = {
        ...action.payload,
        time: action.payload.en_time,
      };
      var myList = [];
      state.data.chats.map((e) => {
        if (e.chat_id == state.data.chatData.chat_id) {
          myList.push({
            ...e,
            messages: [data, ...e.messages],
          });
        } else {
          myList.push(e);
        }
      });
      state.data = {
        ...state.data,
        chats: myList,
        chatData: {
          ...state.data.chatData,
          messages: [data, ...state.data.chatData.messages],
        },
      };
    },
    removeMS(state, action) {
      const data = action.payload;
      var myList = [];
      var messages = [];
      state.data.chats.map((e) => {
        if (e.chat_id == data.chat_id) {
          messages = e.messages.filter((e) => e.id != data.id);
          myList.push({
            ...e,
            messages: e.messages.filter((e) => e.id != data.id),
          });
        } else {
          myList.push(e);
        }
      });
      state.data = {
        ...state.data,
        chats: myList,
        chatData: {
          ...state.data.chatData,
          messages: messages,
        },
      };
    },
    pag(state, action) {
      const { data, id } = action.payload;
      var myList = [];
      state.data.chats.map((e) => {
        if (e.chat_id == id) {
          myList.push({
            ...e,
            messages: [...e.messages, ...data],
          });
        } else {
          myList.push(e);
        }
      });
      state.data = {
        ...state.data,
        chats: myList,
        chatData: {
          ...state.data.chatData,
          messages: [...state.data.chatData.messages, ...data],
        },
      };
    },
    setContextMenuID: (state, action) => {
      state.messageContextID = action.payload.id;
    },
    setFirstChatID: (state, action) => {
      state.firstChatID = action.payload.id;
    },
    orderChats: (state, action) => {
      const { id } = action.payload;

      const chat = state.data.chats.filter((e) => e.id === id);
      const oldChats = state.data.chats.filter((e) => e.id !== id);
      state.data.chats = [...chat, ...oldChats];
    },
    setChatMenuInfo: (state, action) => {
      const { userID, chatID } = action.payload;
      state.chatRightMenu.chatID = chatID;
      state.chatRightMenu.userID = userID;
    },
    deleteChat: (state, action) => {
      const {id} = action.payload
      state.data.chats = state.data.chats.filter((e) => e.id !== id);
    }
  },
});

export const chatAction = chatSlice.actions;
export default chatSlice.reducer;

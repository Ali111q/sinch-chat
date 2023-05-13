import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import IFrame from "./IFrame/IFrame";
const root = ReactDOM.createRoot(document.getElementById("root"));
const chatRoot = ReactDOM.createRoot(document.getElementById("chat_root"));
root.render(
  <>
    <div className="background-image"></div>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
chatRoot.render(
  <>
    <Provider store={store}>
      <IFrame />
    </Provider>
  </>
);

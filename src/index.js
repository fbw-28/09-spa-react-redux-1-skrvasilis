import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Reducer } from "./Reducer";
import { Provider } from "react-redux";

const ReduxStore = createStore(Reducer);

ReactDOM.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./store+connect+provider";
import { createStore } from "./store+connect+provider";
import { reducer } from "./reducer/reducer";
import { Timer } from "./components/timer.component";

let step = 1;

ReactDOM.render(
  <Provider store={createStore(reducer, step)}>
    <Timer />
  </Provider>,
  document.getElementById("app")
);
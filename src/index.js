import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataLayer } from "./DataLayer";
import App from "./App";
import reducer, { inititalState } from "./reducers/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={inititalState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

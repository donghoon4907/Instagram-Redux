import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { hot } from "react-hot-loader/root";
const HotApp = hot(App);
ReactDOM.render(<HotApp />, document.getElementById("root"));

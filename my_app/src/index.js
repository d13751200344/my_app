//const React = require("react"); 舊寫法
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

// 渲染的第一個參數是要渲染出的element，第二參數則是要顯示在id=root
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

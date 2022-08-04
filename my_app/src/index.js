//const React = require("react"); 舊寫法
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>My profile</h1>
      <p>My name is Wu</p>
      <button>Check my profile</button>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector("#root"));

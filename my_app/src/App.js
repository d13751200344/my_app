import React from "react";

//event handling

const App = () => {
  //button click handler製作(函數)
  const buttonHandler = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button
        onClick={() => {
          buttonHandler("How are you?");
        }}
      >
        Hello
      </button>
    </div>
  );
}; //上方 onClick 是 button 的事件，綁定了函數 buttonHandler

export default App;

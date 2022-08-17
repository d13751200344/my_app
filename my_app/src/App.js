import React from "react";
import "./styles/style.css";
import Friend from "./Friend";
//在 props 做好後，引入 friend.js 去使用做好的 props

const App = () => {
  //先寫出等等要使用的資料內容
  let friends = [
    { name: "Harry", age: 17, desc: "Chosen one." },
    { name: "Ron", age: 17, desc: "Red hair." },
    { name: "Snap", age: 37, desc: "Half-blooded prince." },
  ];
  /* 下方 return 內使用上方資料進行 loop，並將 friend.js 中做的 props (如 props.name，即是底下的 name)與 loop 出的結果『value.name』等做綁定 */
  return (
    <div>
      <p>My friends are: </p>
      {friends.map((value) => (
        <Friend name={value.name} age={value.age} desc={value.desc} />
      ))}
    </div>
  );
};
//之後將做好的 App 導出給 index.js 使用

export default App;
// 導出App

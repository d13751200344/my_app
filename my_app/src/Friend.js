import React from "react";

// 先引入參數 props
const Friend = (props) => {
  //console.log(props); 這樣可以看到 props 所帶入的 obj
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>{props.desc}</p>
    </div>
  );
};
//在上方使用 props.name 等讓該值可以於之後才做綁定，做更靈活的運用

export default Friend;

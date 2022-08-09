import React from "react";

const App = () => {
  let friends = ["Harry", "Ron", "Snap"];
  return (
    <div>
      <h1>{Math.Random() * 100}</h1>
      <p>My friends are: </p>
      {friends.map((friend) => {
        return <p>{friend}</p>;
      })}
    </div>
  );
};

export default App;
// 導出App

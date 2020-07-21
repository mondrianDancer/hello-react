import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("초기값");
  // useState에서는 반드시 객체가 아니어도 상관없다.
  // 첫번째 원소는 현재 상태, 두번째 원수는 상태를 바꾸어 주는 함수 (setter)
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
};

export default Say;

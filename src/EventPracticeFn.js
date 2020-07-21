import React, { useState } from "react";

const EventPracticeFn = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username} : ${message}`);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFn;

/** 리액트에서 이벤트를 달는 것은 순수 자바스크립트 또는 jQuery를 사용한 웹 애플리케이션에서 이벤트를 다루는 것과 비슷합니다.
 * 리액트의 장점 중 하나는 자바스크립트에 익숙하다면 쉽게 활용할 수 있다는 것입니다.
 * 따라서 기존 HTML DOM Event 를 알고 있다면 리액트의 컴포넌트 이벤트도 쉽게 다룰 수 있을 것입니다.
 * 이번에는 클래스형 컴포넌트로도 구현해 보고 함수형 컴포넌트로도 구현해 보았습니다.
 * 클래스형 컴포넌트로 할 수 있는 대부분의 작업은 함수형 컴포넌트로도 구현할 수 있습니다.
 * 또한, 함수형 컴포넌트에서 여러 개의 인풋 상태를 관리하기 위해 useState에서 form 객체를 사용하는 방법도 써봤습니다.
 * 우리가 배울 useReducer와 커스텀 Hooks를 사용하면 이 작업을 훨씬 더 편하게 할 수도 있습니다.
 */

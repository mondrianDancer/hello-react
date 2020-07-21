import React from "react";
import PropTypes from "prop-types";

//snippet 쓸 경우 rsc + Enter 하면 자동 글쓰기 완성

// props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소.
// props값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.
const MyComponent = ({ name, favoriteNumber, children }) => {
  //파라미터값 참조 =>
  //const { name, children } = props; =>
  //비구조화 할당 문법, 구조 분해 문법 destructuring assignment
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
      {/** 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props가 있는데, 바로 children이다. */}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
// 이렇게 설정해 주면 name 값은 무조건 문자열 형태로 전달해야 된다는 것을 의미

export default MyComponent;
// 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다.

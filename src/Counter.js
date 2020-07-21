import React, { Component } from "react";

class Counter extends Component {
  // 컴포넌트에 state를 설정할 때는 constructor 메서드를 작성하여 설정합니다.
  constructor(props) {
    super(props);
    //state의 초기값 설정하기
    //컴포넌트의 state는 객체 형식이어야 합니다.
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; //state 를 조회할때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState 를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            //this.setState({ number: number + 1 });
            //this.setState((prevState) => ({ number: prevState.number + 1 }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
          // 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수문법을 사용하여 넣어주어야 합니다.
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

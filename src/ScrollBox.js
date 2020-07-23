import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /**
     * const scrollHeight = this.box.scrollHeight
     * const clientHeight = this.box.clientHeight
     */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      backgroud: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;

/**
 * 컴포넌트 내부에서 DOM 에 직접 접근해야 할 떄는 ref 를 사용합니다.
 * 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후에 활용하세요.
 * 이 시점에서 오해할 수 있는 부분이 있는데, 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용한다면
 * 이는 잘못 사용된 것입니다. 물론 할 수는 있습니다. 컴포넌트에 ref를 달고 그 ref를 다른컴포넌트로 전달하고...
 * 다른 컴포넌트에서  ref 로 전달받은 컴포넌트의 메서드를 실행하고...
 * 하지만 이 방법은 리액트 사상에 어긋난 설계입니다.
 * 앱 규모가 커지면 마치 스파게티처럼 구조가 꼬여 버려서 유지 보수가 불가능해지지요.
 * 컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모, 자식 흐름으로 교류해야 합니다.
 * 나중에 리덕스 혹은 Context API 를 사용하여 효율적으로 교류하는 방법을 배울 것 입니다.
 *
 * 아직 함수형 컴포넌트에서 ref를 사용하는 것은 배우지 않았는데,
 * 함수형 컴포넌트에서는 useRef라는 Hook 함수를 사용합니다.
 * 사용법은 React.createRef와 유사합니다.
 */

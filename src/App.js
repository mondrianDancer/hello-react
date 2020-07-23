import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
// 우리가 만든 MyComponent 컴포넌트를 불러옵니다.

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;

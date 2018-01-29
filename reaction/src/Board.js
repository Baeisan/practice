import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  render() {
      const status = 'Next player: X'; //컨스트 변수라 괄호 블록 내에 있는 곳에만 영향

      return (
        <div>
          <div className="status">{status}</div> //class로 쓰면 에러남 classname라해야함 {status}중괄호 ->자바스크립트언어
            <div className="board-row">
              {this.renderSquare(1)}  // this = 자신 = Board 중괄호->js
              {this.renderSquare(1)}
              {this.renderSquare(1)}
              {this.renderSquare(1)}
              {this.renderSquare(1)}
              <input type = 'text' /> //마지막에 셀프클로징 / 필요 이미지에서도 마찬가지
            </div>
            <div className="board-row">
              {this.renderSquare(2)}
              {this.renderSquare(2)}
              {this.renderSquare(2)}
              {this.renderSquare(2)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(3)}
              {this.renderSquare(3)}
              {this.renderSquare(3)}
              {this.renderSquare(3)}
            </div>
            <div className="board-row">
              {this.renderSquare(4)}
              {this.renderSquare(4)}
              {this.renderSquare(4)}
              {this.renderSquare(4)}
              {this.renderSquare(4)}
            </div>
            <div className="board-row">
              {this.renderSquare(5)}
              {this.renderSquare(5)}
              {this.renderSquare(5)}
              {this.renderSquare(5)}
              {this.renderSquare(5)}
            </div>
        </div> //최종적으로 컴포넌트는 한태그씩으로 감싸져야 해서 의미없는 디브로 하나 더 감싸줌
      );
    }

  renderSquare(i){
    return <Square value = {i} />;

  }
}

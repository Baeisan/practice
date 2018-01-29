import React from 'react';


export default class Square extends React.Component {
  constructor(props){
    super(props); //자기보다 상위컴포의 프롭스를 들고오겠다는 ㄸ스ㅡ며 컨스트럭터랑 항상 같이 들어가야함
    this.state = {
      value: props.value,


    }
  }


  handleClick = () => {

   this.setState({value: 1})

 }


  render() {

    return (
      <button className="square" onClick = {()=> this.handleClick()}>
        {this.state.value}
      </button> ///태그 안에 자바스크립트 언어 쓸때 중괄호 씀 <%%>같으는낌 props 는 read온니 인 컴포넌트 들간의 교류를 의미하는태그
    ); //밸류를 바꾼게 아니라 셋스테이트로 밸류에 x를 부여함 직접적으로 디스.스태이트.밸류 를 이용해서 고쳐선 안됌
  }
}

import React, { Component } from 'react';

class Counter extends Component{
    //state 
    state = {
        number: 0
    };
    //method
    handleIncrease=()=>{
        this.setState({
            number: this.state.number+1
        });
    };
    handleDecrease=()=>{
        this.setState({
            number: this.state.number-1
        });
    }
    // 컴포넌트를 클래스로 만들땐 렌더 함수 필요
    render(){
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;
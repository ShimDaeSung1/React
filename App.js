import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './Counter'

function App() {
  return (
    // div 를 밖에 부모로 묶어줘야 오류가 안 생김 또는 Fragment로 묶기
    <div>
      <div className='App'>
        Hello
      </div>
      <div>
        World
      </div>
      <MyName name="리액트"/>
      <MyName2 name ="홍길동"/>
      <Counter />
    </div>
    
  );
}

export default App;

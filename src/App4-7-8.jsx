import React, { useState, useRef } from 'react';
import { PureComponent } from 'react';
import { useEffect } from 'react';


class Counter extends PureComponent {
  render() {
    const {props} = this;
    return (
    <h1>{props.count}</h1>
    )
  }
}

// 函数组件不能被ref所获取，只有类组件可以被获取
function App(props) {
  // 默认版本
  // const [count, setCount] = useState(0);
  // const it = useRef();
  // useEffect(() => {
  //   it.current = setInterval(() => {
  //     setCount(count => count + 1)
  //   }, 1000);
  // }, [])
  // useEffect(() => {
  //   if(count >= 10) {
  //     clearInterval(it.current);
  //   }
  // })
  const [count, setCount] = useCount(0);
    return (
      <div>
         <button type="button" onClick={() => {setCount(count + 1)}}>
          click {count}
        </button>
          <Counter count={count}></Counter>
      </div>
    );
}
// 单独拎出来
// 自定义hooks
function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef();
  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  }, [])
  useEffect(() => {
    if(count >= 10) {
      clearInterval(it.current);
    }
  })
  return [count, setCount]
}
// Hooks使用法则
// 1.仅在顶层调用函数
// 2.仅在方法组件中调用函数

export default App;
import React, { useState, useMemo, useRef } from 'react';
import { PureComponent } from 'react';
import { useCallback } from 'react';


class Counter extends PureComponent {
  render() {
    const {props} = this;
    return (
    <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

// 函数组件不能被ref所获取，只有类组件可以被获取
function App(props) {
  const [count, setCount] = useState(0);
  const counterRef = useRef();

  const double = useMemo(() => {
    return count*2;
  }, [count]);

  const onClick = useCallback(() => {
    console.log(counterRef.current)
  }, [counterRef])

    return (
      <div>
         <button type="button" onClick={() => {setCount(count + 1)}}>
          click {count} ,doubles: {double}
        </button>
          <Counter ref={counterRef} count={double} onClick={onClick}></Counter>
      </div>
    );
}

export default App;
import React, { useState, useMemo } from 'react';

function Counter(props) {
  return (
      <h1>{props.count}</h1>
  );
}

// useMemo(() => fn) 等价下面
// useCallback(fn)
function App(params) {
  const [count, setCount] = useState(0);

  // 不传每次执行 [] 只存一次，渲染期间完成 useEffect是渲染完成之后执行
  const double = useMemo(() => {
    return count*2;
  }, [count]);

    return (
      <div>
         <button type="button" onClick={() => {setCount(count + 1)}}>
          click {count} ,doubles: {double}
        </button>
          <Counter count={double}></Counter>
      </div>
    );
}

export default App;
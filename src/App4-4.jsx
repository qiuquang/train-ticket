import React, {  createContext, useState, Component, useContext } from 'react';

const CountContext = createContext();

// 类组件中用consumer
class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}

// contextType 用法
class Bar extends Component {
  static contextType = CountContext;
  render() {
    const count = this.context;
    return (
      <h1>{count}</h1>
    )
  }
}

// function 用useContext
// 类组件用Provieder 和 Consumer
function Counter() {
  const count = useContext(CountContext);
  return (
      <h1>{count}</h1>
  );
}

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => {setCount(count + 1)}}>
        click {count}
      </button>
      <CountContext.Provider value={count}>
        <Foo></Foo>
        <Bar></Bar>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
}

export default App;
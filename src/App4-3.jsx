import React, { Component, useState, useEffect } from 'react';

// 旧方式
class App2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  onResize = () => {
    this.setState({  size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    } })
  }
  componentDidMount(){
    document.title = this.state.count;
    window.addEventListener('resize', this.onResize, false);
  }
  componentDidUpdate(){
    document.title = this.state.count;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false);
  }
  render() {
    const { count, size } = this.state;
    return (
      <div>
        <button type="button" onClick={() => {this.setState({count: count + 1})}}>
          Click ({count}),
          size {size.width} x {size.height}
        </button>
      </div>
    );
  }
}
// hooks
// 1.useState 规矩来 有差距
// 2.useState 可以传一个函数 用来初次设置默认值
function App(props) {
  const [count, setCount] = useState(() => {
    return props.defaultCount || 0;
  });

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  // 与count有关
  useEffect(() => {
    console.log('count:', count);
  }, [count])

  useEffect(() => {
    document.title = count;
  })

  // 什么都不传，每次都执行
  // 传空数组 空数组与空数组相同，只执行一次
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    }
  }, [])

  return (
    <div>
      <button type="button" onClick={() => {setCount(count + 1)}}>
        Click ({count})
        size {size.width} x {size.height}
      </button>
    </div>
  );
}

export default App;
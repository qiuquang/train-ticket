import React, { useState } from 'react';

// 旧方式
// class App2 extends Component {
//   state = {
//     count: 0,
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={() => {this.setState({count: count + 1})}}>
//           Click ({count})
//         </button>
//       </div>
//     );
//   }
// }
// hooks
// 1.useState 规矩来 有差距
// 2.useState 可以传一个函数 用来初次设置默认值
function App(props) {
  const [count, setCount] = useState(() => {
    console.log('init');
    return props.defaultCount || 0;
  });
  return (
    <div>
      <button type="button" onClick={() => {setCount(count + 1)}}>
        Click ({count})
      </button>
    </div>
  );
}

export default App;
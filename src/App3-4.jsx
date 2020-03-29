import  React, {  Component, PureComponent, memo } from 'react';
import './App.css';


// class Foo extends Component {
//   // 是否需要重新加载
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.name === this.props.name) {
//       return false;
//     }
//     return true;
//   };
//   render() {
//     console.log('Foo render')
//     return null
//   }
// }

//PureComponent 和 memo
// PureComponent传入的props的第一级变化才重新渲染
// PureComponent 回调函数不能用内联的回调函数

// 无状态组件
const Foo = memo(function Foo(props){
    console.log('Foo render');
  return <div>{props.person.age}</div>;
});

class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  };
  // 用callback做未内属性来控制页面渲染
  callback = () => {

  }; 
  render() {
    const person = this.state.person;
    let count = this.state.count;
    return (
    <div>
      <button onClick={() => {
        person.age++;
        count++
        this.setState({person, count})
      }}>Add</button>
      <Foo person={person} cb={this.callback} name="Mike"/>
    </div>
    )
  }
}

export default App;

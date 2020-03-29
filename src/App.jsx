import React, { createContext, Component } from 'react';
import './App.css';

const BatteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends Component {
  // 单组件中使用contentType很简单
  static contextType = BatteryContext;
  render() {
    // 设置contextType后 leaf组件有了新属性context
    const battery = this.context;
    return (
      <h1>Battery:{battery}</h1> 
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf/>
  }
}

class App extends Component {
  state = {
    battery: 60,
    online: false,
  };
  render() {
    let { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button type="button"
          onClick={() => this.setState({battery: battery-1})}>
            press
          </button>
          <button type="button"
          onClick={() => this.setState({online: !online})}>
            press2
          </button>
          <Middle/>
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default App;

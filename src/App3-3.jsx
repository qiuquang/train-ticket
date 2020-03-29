import  React, {  Component, lazy, Suspense } from 'react';
import './App.css';

const About = lazy(() => import(/* webpackChunkName: "About" */ './About.jsx'))

// ErrorBoundary 错误边界
// componentDidCatch

class App extends Component {
  state = {
    hasError: false,
  };
  // 方法1声明周期更改
  // componentDidCatch() {
  //   this.setState({
  //     hasError: true,
  //   });
  // };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About/>
        </Suspense>
      </div>
    );
  }
}

export default App;

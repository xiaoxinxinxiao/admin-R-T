import * as React from 'react';
import './App.less';
import Home from './pages/home/home';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  };
}


import React, { Component } from 'react';
import ListModule from './Containers/ListModule';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListModule {...this.props} />
      </div>
    );
  }
}

export default App;

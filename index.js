import React, { Component } from 'react';
import { render } from 'react-dom';
import Screen1 from './Containers/Screen1';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="d-flex h-100vh justify-content-center">
        <Screen1/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

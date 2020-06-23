import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Screen1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h2>Screen 1</h2>
      </div>
    );
  }
}
export default Screen1;
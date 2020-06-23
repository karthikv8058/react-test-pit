import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import Screen2 from '../Screen2';
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
      <div className="align-self-center">
        <Button class="btn-screen1" title="Register"/>
        <Screen2/>
      </div>
    );
  }
}
export default Screen1;
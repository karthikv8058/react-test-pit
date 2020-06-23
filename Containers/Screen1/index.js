import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import Screen2 from '../Screen2';
import './style.css';
import history from '../../history';

class Screen1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="d-flex h-100vh justify-content-center">
        <div className="align-self-center">
          <button className="btn-screen1" onClick={() => history.push('/Screen2')}>Register</button>
        </div>
      </div>
    );
  }
}
export default Screen1;
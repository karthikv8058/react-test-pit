import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import {withRouter} from 'react-router-dom'
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
          <button className="btn-screen1" onClick={() => this.props.history.push('/Screen2')}>Register</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Screen1);
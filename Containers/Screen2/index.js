import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import './style.css';

class Screen2 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          for uploading img
        </div>
        <div className="col-sm-8">
          for form data
        </div>
      </div>
    );
  }
}
export default Screen2;
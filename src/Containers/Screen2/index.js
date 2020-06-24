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
      <div className="container p-5">
        <div className="row text-dark">
          <div className="col-sm-4">
            <button className="btn btn-primary btn-upload-photo">
              Upload <br/>
              Your Photo
            </button>
          </div>
          <div className="col-sm-8">
            <div>
                <form className="">
                  <div className="form-group row mb-3">
                      <div className="col-3">
                          <span>Name</span>
                      </div>
                      <div className="col-9">
                         
                            <input type="text" placeholder="First Name" className=" px-3 text-input-form"/>
                            <input type="text" placeholder="Last Name" className="ml-3 px-3 text-input-form"/>
                      </div>
                  </div>
                  
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Screen2;
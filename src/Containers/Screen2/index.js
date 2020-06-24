import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import './style.css';
import ReactSlider from 'react-slider';

class Screen2 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      min:19,
      step:10,
      max:45,
      curVal:19,
    };
  }

  handleOnChnage = (values) =>{
    console.log('changed',values);
    this.setState({
      curVal:values,
    })
  }

  Thumb = (props, state) => {
    return <div {...props}>
      {state.valueNow<20&&state.valueNow>13&&'13-19'}
      {state.valueNow<30&&state.valueNow>20&&'20-29'}
      {state.valueNow<45&&state.valueNow>30&&'30-45'}
      {state.valueNow>45&&'45 & Above'}
     
    </div>;
  }
  

  render() {
    return (
      <div className="container p-5">
        <div className="row text-dark">
          <div className="col-md-4 text-center">
            <button className="btn btn-primary btn-upload-photo mx-auto">
              Upload <br/>
              Your Photo
            </button>
          </div>
          <div className="col-md-8 mt-5 mt-md-0">
            <div>
                <form className="">
                  <div className="form-group row mb-3">
                      <div className="col-3">
                          <span>Name</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <input type="text" placeholder="First Name" className=" px-3 text-input-form"/>
                            <input type="text" placeholder="Last Name" className="ml-0 ml-xl-3 mt-3 mt-xl-0 px-3 text-input-form"/>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-5">
                      <div className="col-3">
                          <span>Age</span>
                          <span>{this.state.curVal}</span>
                      </div>
                      <div className="col-9">
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            min={this.state.min}
                            max={this.state.max}
                            step={this.state.step}
                            onChange={(values)=>{this.handleOnChnage(values)}}
                            renderThumb={this.Thumb}
                        />
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
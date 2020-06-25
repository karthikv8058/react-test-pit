import React, { Component , createRef } from 'react';
import { render } from 'react-dom';
import Button from '../../Components/Button';
import './style.css';
import ReactSlider from 'react-slider';
import Screen3 from '../Screen3';
import history from '../../history';
import {withRouter} from 'react-router-dom'

class Screen2 extends Component {
  constructor() {
    super();

    this.fnameRef=createRef();
    this.emailRef=createRef();
    this.telRef=createRef();
    this.stateRef=createRef();
    this.countryRef=createRef();
    this.addressRef=createRef();
    this.interestsRef=createRef();
    this.fileUploadRef=createRef();
    this.subscribeRef=createRef();

    this.state = {
      name: 'React',
      min:19,
      step:10,
      max:49,
      curVal:19,
      fname:'',
      lname:'',
      age:0,
      address:'',
      fnameError:false,
      emailError:false,
      telError:false,
      stateError:false,
      countryError:false,
      addressError:false,
      fnameErrorText:'',
      emailErrorText:'',
      telErrorText:'',
      stateErrorText:'',
      countryErrorText:'',
      addressErrorText:'',
      interests:[],
      imagePreviewUrl:'',
      file:'',
      isFileUpload:false,
      isSubscribe:false,
    };
  }

  handleNameOnBlur=()=>{
    if(this.fnameRef.current.value=='')
      {
        this.setState({
          fnameError:true,
          fnameErrorText:'First Name is required',
        });
      }
      else{
        this.setState({
          fnameError:false,
          fnameErrorText:'',
        });
      }
  }

  handleNameOnChnage = () =>{
    let regexname=/^[a-zA-Z]{1,20}$/gm;

    if(!regexname.test(this.fnameRef.current.value)){
      this.setState({
        fnameError:true,
        fnameErrorText:'Not more than 20 alphabet',
      });
      this.fnameRef.current.value='';
    }else{
      this.setState({
        fname:this.fnameRef.current.value,
        fnameError:false,
        fnameErrorText:'',
      })
    }

  }

  handleAddressOnChnage = () =>{
    console.log('Address:',this.addressRef.current.value);
    if(this.addressRef.current.value==''){
      this.setState({
        addressError:true,
        addressErrorText:'Address is required',
        address:'',
      });
    }else{
      this.setState({
        addressError:false,
        addressErrorText:'',
        address:this.addressRef.current.value,
      });
    }
  }

  handleOnChnage = (values) =>{
    console.log('changed',values);
    this.setState({
      curVal:values,
    })
  }

  handleInterestsonKeyDown = (e) =>{
    // console.log('From input:',this.interestsRef.current.value);
    const interests=this.state.interests;
    console.log('Key',e.key);
    if(e.key===','){
      this.interestsRef.current.value.split(",").map((item) =>  
        {
          if(interests.find(interest=>interest.toLowerCase()===item.toLowerCase()) || item==''){
            console.log('Same Values');
          }
          else{
            interests.push(item);
          } 
        }
        );
        this.setState({
          interests
        });
    }
  }

  removeInterest = (i,e) =>{
    e.preventDefault();
    const interests=this.state.interests;
    interests.splice(i,1);
    this.setState({
      interests
    })
  }
  
  
  Thumb = (props, state) => {
    return <div className="d-block" {...props}>
      {state.valueNow<20&&state.valueNow>13&&'13-19'}
      {state.valueNow<30&&state.valueNow>20&&'20-29'}
      {state.valueNow<45&&state.valueNow>30&&'30-45'}
      {state.valueNow>40&&'45 & Above'}
     
    </div>;
  }
  
  fileUploadAction = () =>
  this.fileUploadRef.current.click();
  
  fileUploadInputChange = (e) =>{
    
    e.preventDefault(); 
   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend = () => {
     this.setState({
       file: file,
       imagePreviewUrl: reader.result,
       isFileUpload:true,
     });
   }

  reader.readAsDataURL(file)
    //this.setState({fileUploadState:e.target.value});
  }

  handleCheckBox = () =>{
    console.log('checked');
    
    this.setState({
      isSubscribe:!this.state.isSubscribe,
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.history.push('/Screen3',{stateProps:this.state});
  }

  render() {
    let {
      fname,
      address,
      fnameError,
      emailError,
      telError,
      stateError,
      countryError,
      addressError,
      fnameErrorText,
      emailErrorText,
      telErrorText,
      stateErrorText,
      countryErrorText,
      addressErrorText,
      interests,
      fileUploadState,
      imagePreviewUrl,
      file,
      isFileUpload,
      isSubscribe,
    }=this.state;


    
    return (
      <div className="container p-5">
        <div className="row text-dark">
          <div className="col-md-4 text-center border-right border-primary">
          <input type="file" hidden ref={this.fileUploadRef} onChange={this.fileUploadInputChange}/>
            <button style={{backgroundImage:isFileUpload&&`url(${imagePreviewUrl})`}} onClick={this.fileUploadAction} className="btn btn-primary btn-upload-photo mx-auto">
              {isFileUpload?'Change':'Upload'} <br/>
              Your Photo
            </button>
            
          </div>
          <div className="col-md-8 mt-5 mt-md-0">
            <div>
                <form className="">
                  <div className="form-group row mb-3">
                      <div className="col-3 text-right">
                          <span>Name</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <input type="text" placeholder="First Name" 
                            onBlur={this.handleNameOnBlur} 
                            onChange={this.handleNameOnChnage} 
                            ref={this.fnameRef} 
                            value={this.fname}
                            className=" px-3 text-input-form"/>
                            <input type="text" placeholder="Last Name" className="ml-0 ml-xl-3 mt-3 mt-xl-0 px-3 text-input-form"/>
                            <span className="text-danger">
                              {fnameError&&fnameErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-5">
                      <div className="col-3 text-right">
                          <span>Age</span>
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
                  <div className="form-group row mb-3 mt-5">
                      <div className="col-3 text-right">
                          <span>Email</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <input type="text" placeholder="Email" 
                            onBlur={this.handleEmailOnBlur} 
                            onChange={this.handleEmailOnChnage} 
                            ref={this.emailRef} 
                            className=" px-3 text-input-form w-100"/>
                            <span className="text-danger">
                              {emailError&&emailErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span>Tel</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <input type="text" placeholder="Tele" 
                            onBlur={this.handleTelOnBlur} 
                            onChange={this.handleTelOnChnage} 
                            ref={this.telRef} 
                            className=" px-3 text-input-form w-100"/>
                            <span className="text-danger">
                              {telError&&telErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span>State</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <select  
                            onChange={this.handleStateOnChnage} 
                            ref={this.stateRef} 
                            className=" px-3 text-input-form w-100">
                              <option value="">Select State</option>
                              <option value="Alaska">Alaska</option>
                              </select>
                            <span className="text-danger">
                              {stateError&&stateErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span>Country</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <select  
                            onChange={this.handleCountryOnChnage} 
                            ref={this.countryRef} 
                            className=" px-3 text-input-form w-100">
                              <option value="">Select Country</option>
                              <option value="United States">United States</option>
                              </select>
                            <span className="text-danger">
                              {countryError&&countryErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span>Address</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                            <select  
                            onChange={this.handleAddressOnChnage} 
                            ref={this.addressRef} 
                            className=" px-3 text-input-form w-100 mb-3">
                              <option value="">Select Address</option>
                              <option value="Home">Home</option>
                              <option value="Company">Company</option>
                              </select>
                            
                            <div className={address=='Home'?'d-block':'d-none'}>
                            <input 
                              type="text" placeholder="Home 1" 
                              className=" px-3 text-input-form"/>
                            <input 
                            type="text" placeholder="Home 2" 
                            className="ml-0 ml-xl-3 mt-3 mt-xl-0 px-3 text-input-form"/>
                            </div>

                            <div className={address=='Company'?'d-block':'d-none'}>
                            <input 
                              type="text" placeholder="Company 1" 
                              className=" px-3 text-input-form"/>
                            <input 
                            type="text" placeholder="Company 2" 
                            className="ml-0 ml-xl-3 mt-3 mt-xl-0 px-3 text-input-form"/>
                            </div>

                            <span className="text-danger">
                              {/* {fnameError&&fnameErrorText} */}
                            </span>
                            <span className="text-danger">
                              {addressError&&addressErrorText}
                            </span>
                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span>Interests</span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                      <input type="text" placeholder="Type interests seperated by comma" 
                            onBlur={this.handleInterestsOnBlur} 
                            onKeyDown={this.handleInterestsonKeyDown} 
                            ref={this.interestsRef}
                            className=" px-3 text-input-form w-100"/>

                            <ul className="list-unstyled mt-3">
                              {interests.map((item,index)=>
                                <li key={index} className="bg-theme py-1 pl-2 pr-5 text-white list-inline-item relative">{item}
                                  <button onClick={()=>this.removeInterest(index)} className="btn bg-theme text-white tag-item-close p-0">X</button>
                                </li>
                              )}
                            </ul>
                            <span className="text-danger">
                              
                            </span>

                      </div>
                  </div>
                  <div className="form-group row mb-3 mt-4">
                      <div className="col-3 text-right">
                          <span className="pt-1">
                          <label class="containercheckbox text-right">
                            <input type="checkbox" className="bg-theme" onChange={this.handleCheckBox} ref={this.subscribeRef}/>
                            <span class="checkmark"></span>
                            </label>
                          </span>
                      </div>
                      <div className="col-9 mt-3 mt-sm-0">
                          <span className="d-block mb-3">Subscribe to the news letter</span>
                          <div className="text-right">
                            <Button  handleButtonClick={(e)=>this.handleSubmit(e)} title="Submit" />
                          </div>
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
export default withRouter(Screen2);
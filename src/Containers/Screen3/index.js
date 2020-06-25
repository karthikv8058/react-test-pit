import React, { Component,createRef } from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';
import './style.css';

class Screen3 extends Component {
  constructor() {
    super();

    this.fileUploadRef=createRef();
    
    this.state = {
      parentState:{}
    };

  }

  componentWillMount(){
      this.setState({
        parentState:this.props.location.state.stateProps,
      });    
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
  

  render() {
    let {parentState}=this.state;
    //console.log('parentState:',parentState);
    
    return (
      <div className="container p-5">
        <div className="row text-dark">
          <div className="col-md-4 text-center border-right border-primary">
          <input type="file" hidden ref={this.fileUploadRef} onChange={this.fileUploadInputChange}/>
            <button style={{backgroundImage:parentState.isFileUpload&&`url(${parentState.imagePreviewUrl})`}} onClick={this.fileUploadAction} className="btn btn-primary btn-upload-photo mx-auto">
              {parentState.isFileUpload?'Change':'Upload'} <br/>
              Your Photo
            </button>
          </div>
          <div className="col-md-8 mt-5 mt-md-0">
            <div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Screen3;
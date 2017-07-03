import React, { Component } from 'react';
import FormContent from './form-content'
import './FormBox.css';

class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <img className="form-image" src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/oney-foto-lp-youtube.jpg?alt=media&token=a33eac1d-c29f-49af-bb1b-b2b6577d89f9"></img>
        <h1>I Workshop Online: Eu Influencer</h1>
        <p>Sacadas, Insights, Marketing viral, Engajamento de audiência, Comportamento digital.</p>
        <FormContent />
        <div className="fb-like" data-href="https://www.facebook.com/oney.araujo/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        <div className="g-ytsubscribe" data-channel="niimakeup" data-layout="default" data-count="default"></div>
      </div>
    );
  }
}

export default FormBox;

import React, { Component } from 'react';
import FormContent from './form-content'
import './FormBox.css';

class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <img className="form-image" src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/oney-foto-lp-youtube.jpg?alt=media&token=a33eac1d-c29f-49af-bb1b-b2b6577d89f9"></img>
        <h1>I Workshop online Eu Influencer</h1>
        <p>Sacadas, insights, Marketing viral, Engajamento de audiência, comportamento digital.</p>
        <FormContent />
      </div>
    );
  }
}

export default FormBox;

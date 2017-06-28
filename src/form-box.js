import React, { Component } from 'react';
import FormContent from './form-content'
import './FormBox.css';

class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <img className="form-image" src="https://firebasestorage.googleapis.com/v0/b/euinfluencer.appspot.com/o/oney-foto-lp-youtube.jpg?alt=media&token=a33eac1d-c29f-49af-bb1b-b2b6577d89f9"></img>
        <h1>Sacadas, insights e direcionamentos de mídia social para Digital Influencers.</h1>
        <p>Influencie pessoas pelo mundo inteiro.</p>
        <FormContent />
      </div>
    );
  }
}

export default FormBox;

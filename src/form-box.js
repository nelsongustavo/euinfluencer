import React, { Component } from 'react';
import FormContent from './form-content'
import './FormBox.css';

class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <img className="form-image" src=""></img>
        <h1>Sacadas de Coaching, carreira, comunicação e mindset.</h1>
        <p>Descubra como o Coaching pode transformar a sua carreira.</p>
        <FormContent />
      </div>
    );
  }
}

export default FormBox;

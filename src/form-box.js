import React, { Component } from 'react';
import FormContent from './form-content'
import FacebookProvider, { Like } from 'react-facebook';
import { YouTubeButton } from 'react-social-sharebuttons';
import './FormBox.css';

class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <img className="form-image" src="https://firebasestorage.googleapis.com/v0/b/euinfluencer.appspot.com/o/oney-foto-lp-youtube.jpg?alt=media&token=a33eac1d-c29f-49af-bb1b-b2b6577d89f9"></img>
        <h1>I Workshop Online: Eu Influencer</h1>
        <p>Sacadas, Insights, Marketing viral, Engajamento de audiência, Comportamento digital.</p>
        <FormContent />
        <FacebookProvider appId="119817438197601">
          <Like href="https://www.facebook.com/oney.araujo/" colorScheme="dark" showFaces share />
        </FacebookProvider>
        <YouTubeButton channel="niimakeup"/>
      </div>
    );
  }
}

export default FormBox;

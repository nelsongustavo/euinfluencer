import React, { Component } from 'react';
import FormContent from './form'
import FacebookProvider, { Like } from 'react-facebook';
import { YouTubeButton } from 'react-social-sharebuttons';

class FormContainer extends Component {
  render() {
    return (
      <div className="form-container">
        <FormContent
          imageUrl="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/oney-foto-lp-youtube.jpg?alt=media&token=a33eac1d-c29f-49af-bb1b-b2b6577d89f9"
          title="I Workshop Online: Eu Influencer"
          text="Sacadas, Insights, Marketing viral, Engajamento de audiência, Comportamento digital."
        />
        <FacebookProvider appId="119817438197601">
          <Like href="https://www.facebook.com/oney.araujo/" colorScheme="dark" showFaces share />
        </FacebookProvider>
        <YouTubeButton channel="niimakeup"/>
      </div>
    );
  }
}

export default FormContainer;

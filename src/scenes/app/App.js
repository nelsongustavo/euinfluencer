import React, { Component } from 'react';
import FormContainer from './_/Form';
import ga from 'react-ga';
import './App.css';

ga.pageview(window.location.pathname);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="bg-filter"></div>
          <div className="container">
            <FormContainer />
            <footer className="app-footer">Nossa política de privacidade garante que nós NUNCA iremos vender, alugar, dar ou divulgar seu e-mail para NINGUÉM.</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

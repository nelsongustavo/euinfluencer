import React, { Component } from 'react';
import FormBox from './form-box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="bg-filter"></div>
          <div className="container">
            <FormBox />
            <footer className="footer">Nossa política de privacidade garante que nós NUNCA iremos vender, alugar, dar ou divulgar seu e-mail para NINGUÉM.</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

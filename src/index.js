import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Ebook from './scenes/E-book';
import registerServiceWorker from './registerServiceWorker';
import ga from 'react-ga';

ga.initialize('UA-102606035-1');

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Ebook} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

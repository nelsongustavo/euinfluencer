import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ga from 'react-ga';

import Ebook from './scenes/ebook';
import App from './scenes/app';
import thanks from './scenes/thanks';

import registerServiceWorker from './registerServiceWorker';

ga.initialize('UA-102606035-1');
ga.pageview(window.location.pathname);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/obrigado" component={thanks} />
        <Route path="/app" component={App} />
        <Route path="/" component={Ebook} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

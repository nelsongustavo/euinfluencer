import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ga from 'react-ga';

import Ebook from './scenes/ebook';
import Workshop from './scenes/workshop';
import thanks from './scenes/thanks';
import CheckEmail from './scenes/check-email';

import registerServiceWorker from './registerServiceWorker';

ga.initialize('UA-102606035-1');
ga.pageview(window.location.pathname);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/check-email" component={CheckEmail} />
        <Route path="/obrigado" component={thanks} />
        <Route path="/1-semana-influenciador-digital" component={Workshop} />
        <Route path="/" component={Ebook} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

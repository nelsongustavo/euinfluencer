import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ga from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import Ebook from './scenes/ebook';
import Week from './scenes/week';
import Workshop from './scenes/workshop';
import Thanks from './scenes/thanks';
import CheckEmail from './scenes/check-email';

import registerServiceWorker from './registerServiceWorker';

ReactPixel.init('498312307210725');
ReactPixel.pageView();

ga.initialize('UA-102606035-1');
ga.pageview(window.location.pathname);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/week" component={Week} />
        <Route path="/1-semana-influenciador-digital" component={Workshop} />
        <Route path="/check-email" component={CheckEmail} />
        <Route path="/obrigado" component={Thanks} />
        <Route path="/ebook" component={Ebook} />
        <Route path="/" component={Week} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();

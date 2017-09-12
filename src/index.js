import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Ebook from './scenes/ebook';
import Week from './scenes/week';
import Workshop from './scenes/workshop';
import Thanks from './scenes/thanks';
import CheckEmail from './scenes/check-email';

import track from './shared/track';
import { unregister } from './registerServiceWorker';

unregister();

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/week" component={track(Week)} />
        <Route path="/1-semana-influenciador-digital" component={track(Workshop)} />
        <Route path="/check-email" component={track(CheckEmail)} />
        <Route path="/obrigado" component={track(Thanks)} />
        <Route path="/ebook" component={track(Ebook)} />
        <Route path="/" component={track(Week)} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));

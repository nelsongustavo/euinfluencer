import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from "./flux/reducers";
import Ebook from './scenes/ebook';
import Home from './scenes/home';
import Workshop from './scenes/workshop';
import Thanks from './scenes/thanks';
import CheckEmail from './scenes/check-email';

import track from './shared/track';
import { unregister } from './registerServiceWorker';
unregister();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Switch>
        <Route path="/1-semana-influenciador-digital" component={track(Workshop)} />
        <Route path="/check-email" component={track(CheckEmail)} />
        <Route path="/obrigado" component={track(Thanks)} />
        <Route path="/ebook" component={track(Ebook)} />
        <Route path="/" component={track(Home)} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

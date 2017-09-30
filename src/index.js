import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from "./flux/reducers";
import Ebook from './Scenes/Ebook';
import Home from './Scenes/Home';
import Workshop from './Scenes/WorkShop';
import Thanks from './Scenes/Thanks';
import CheckEmail from './Scenes/CheckEmail';

import Track from './Shared/Track';
import { unregister } from './registerServiceWorker';
unregister();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Switch>
        <Route path="/1-semana-influenciador-digital" component={Track(Workshop)} />
        <Route path="/check-email" component={Track(CheckEmail)} />
        <Route path="/obrigado" component={Track(Thanks)} />
        <Route path="/ebook" component={Track(Ebook)} />
        <Route path="/" component={Track(Home)} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

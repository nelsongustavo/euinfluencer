import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ga from 'react-ga';
import './index.css';

ga.initialize('UA-102606035-1');
ga.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

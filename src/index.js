import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './styles/App.css';

//import registerServiceWorker from './registerServiceWorker';

import 'picturefill';

import configureStore from './store/configureStore'
import {loadSection} from './actions/sectionActions';
import {loadWork} from './actions/workActions';
import {loadPlay} from './actions/playActions';
import {loadGallery} from './actions/galleryActions';
import {changeTheme} from './actions/themeActions';

if ('addEventListener' in document) {
    const FastClick = require('fastclick');
    document.addEventListener('DOMContentLoaded', () => {
        FastClick.attach(document.body);
    }, false);
}

const store = configureStore();
store.dispatch(loadSection());
store.dispatch(loadWork());
store.dispatch(loadPlay());
store.dispatch(loadGallery());
store.dispatch(changeTheme('config'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();

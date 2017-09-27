import React from 'react';
import 'redux/localStorage';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { Router, Route, hashHistory, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'babel-polyfill';
import configureStore from 'redux/store';
import App from 'containers/App';
import app from 'routes/app';
import Page404 from 'routes/404';
import Page500 from 'routes/500';
import confirmEmail from 'routes/auth/confirmEmail';
import forgotPassword from 'routes/auth/forgotPassword';
import resetPassword from 'routes/auth/resetPassword';
import lockScreen from 'routes/lockScreen';
import login from 'routes/auth/login';
import signUp from 'routes/auth/signUp';
import signUpVerify from 'routes/auth/signUpVerify';
import fullscreen from 'routes/fullscreen';

const initialState = fromJS({});
const store = configureStore(initialState, hashHistory);

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.get('routing')
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/app/dashboard') },
    childRoutes: [
      app,
      Page404,
      Page500,
      confirmEmail,
      forgotPassword,
      resetPassword,
      lockScreen,
      login,
      signUp,
      signUpVerify,
      fullscreen,
      {
        path: '*',
        indexRoute: { onEnter: (nextState, replace) => replace('/404') },
      }
    ]
  }]
};

render(
  <Provider store={store}>
    <Router
      onUpdate={scrollToTop}
      history={history}
      routes={rootRoute}
    />
  </Provider>,
  document.getElementById('app-container')
);

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Navigator } from 'react-onsenui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Login from './pages/Login';
import MainPage from './pages/MainPage';

const renderPage = (route, navigator) => <route.component key={route.key} navigator={navigator} />;

const App = (props) => {
  const { token } = props;
  let initialRoute;
  if (!token) {
    initialRoute = {
      component: Login,
      key: 'LOGIN',
      MainPage
    };
  } else {
    initialRoute = {
      component: MainPage,
      key: 'MAIN_PAGE',
      Login
    };
  }
  return (
    <Navigator
      renderPage={renderPage}
      initialRoute={initialRoute}
      animation="fade"
    />
  );
};

function mapStateToProps(state) {
  return {
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

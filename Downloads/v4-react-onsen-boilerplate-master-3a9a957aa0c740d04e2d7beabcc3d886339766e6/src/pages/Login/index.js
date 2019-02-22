import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Orders from '../Orders/index';
import OrderHistory from '../OrderHistory'; 
import UpdateBeans from '../UpdateBeans';
import UpdateBeverages from '../UpdateBeverages';

import '../../../public/style/css/onsen-css-components.css';

import {
  Page,
  Navigator,
  Button,
  Card,
  Row,
  Tab,
  Tabbar,
  Toolbar,
  BackButton,
  Input
} from 'react-onsenui';

class Tabs extends React.Component {
  renderTabs() {
    return [
      {
        content: <Orders navigator={this.props.navigator} />,
        tab: <Ons.Tab label='Orders' icon='elementor' />
      },
      {
        content: <OrderHistory />,
        tab: <Ons.Tab label='Order History' icon='history' />
      },
      {
        content: <UpdateBeverages />,
        tab: <Ons.Tab label='Beverages' icon='md-coffee' />
      },
      {
        content: <UpdateBeans />,
        tab: <Ons.Tab label='Beans' icon='md-settings' />
      },
     
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar renderTabs={this.renderTabs.bind(this)} />
      </Page>
    );
  }
}

class Onboarding extends React.Component {
  pushToLogin() {
    console.log(this.props);
    // this.props.navigator.pushPage()
    this.props.navigator.pushPage({ comp: Login });
  }

  pushToRegister() {
    console.log(this.props);
    // this.props.navigator.pushPage()
    this.props.navigator.pushPage({ comp: Register });
  }

  render() {
    return (
      <Page>
        <Card>
          <img
            className="card-img"
            src="https://i.imgur.com/K0zwcIi.png"
            alt="Card image cap"
            style={{ maxWidth: '100vw', maxHeight: '60vh', alignContent: 'center' }}
          />
          <p className="title">
            Get the best
            {' '}
            <br />
            coffee here!
          </p>
        </Card>
        <Row style={{ justifyContent: 'center', margin: '32px 8px 10px 8px' }}>
          <Button onClick={this.pushToRegister.bind(this)}>Register</Button>
          <Button className="button--outline" onClick={this.pushToLogin.bind(this)}>
            Login
          </Button>
        </Row>
      </Page>
    );
  }
}

class Login extends React.Component {
  pushPage() {
    fetch('https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/login',
      {
        method: 'POST',
        headers: {
          'Server-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiJ1QkVQUTVpZDR0RmVlcE9wQjBwd3E1RnRxTUZZNW9QT0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk4NzQ3NzQsImV4cCI6MTU1MjQ2Njc3NCwiYXpwIjoidUJFUFE1aWQ0dEZlZXBPcEIwcHdxNUZ0cU1GWTVvUE8iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.d6qVXnj5AoEvn7v8-Vshl8lrKByMl0F3pIWHcj2C9VdAuiMvOmtWrAFkfl7TwCJdEoPLzTndX2mBQ9OHE0kqfgqNKX9xP5KMOv-NvgQgiLFrG-DG6RiRy6_myJdGAOm52QpHsIG1OLicecU62zbw6EhYM8lKYGcLDUE9H9a3G5H28Ex5P2zG9NdcVv-FFwqmaCY_7Q3bwEOx_T5jfWqeyXaiTZiveENCS7avmybpDyZ06Os96_mQJppVc7P3Fe2dFj8L72cLW2zOOV2eKFuNRD8MR0x3H6dXcXVe9vMiFV_zwxh5ASUAkxIoNby6o5v7KPdBshnTxi4YHSXmHH8rlw',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.email,
          password: this.state.password
        })
      }).then(response => response.json())
      .then(data => {
        if (!data.error) {
          this.setState({ loginError: false });
          this.props.navigator.pushPage({ comp: Tabs });
        } else {
          this.setState({ loginError: true });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  pushToRegister() {
    console.log(this.props);
    // this.props.navigator.pushPage()
    this.props.navigator.pushPage({ comp: Register });
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', loginError: false };
  }

  render() {
    return (
      <Page>
        <Toolbar modifier={this.props.modifier}>
          <div className="left">
            <BackButton modifier={this.props.modifier} />
          </div>
          <div className="center text-center">Login</div>
        </Toolbar>
        <Row style={{ margin: '60px 8px 10px 16px' }}>
          <h1>Welcome Back!</h1>
        </Row>
        <div style={{ margin: '20px 6vw 5px 16px' }}>
          <Input
            name="email"
            style={{ width: '90vw', marginTop: '15px' }}
            value={this.state.email}
            float
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            modifier="material"
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            style={{ width: '90vw', marginTop: '50px' }}
            value={this.state.password}
            float
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
            modifier="material"
            placeholder="Password"
          />
          { this.state.loginError && <p style={{ color: 'red' }} >
            Invalid credentials
          </p>}
          <p style={{
            float: 'right', marginTop: '20px', color: '#8C746A', fontSize: '91%'
          }}
          >
            {' '}
            Forgot password?
            {' '}
          </p>
          <Button className="button--large" onClick={this.pushPage.bind(this)}>
            Login
          </Button>
          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '-5px',
              color: 'grey',
              fontSize: '80%'
            }}
          >
            {' '}
            Don't have an account?
            {' '}
          </p>
          <p
            style={{
              fontSize: '90%',
              textAlign: 'center',
              color: '#8C746A',
              textDecoration: 'none',
              lineHeight: '25px'
            }}
            onClick={this.pushToRegister.bind(this)}
          >
            <b>Register</b>
          </p>
        </div>
      </Page>
    );
  }
}

class Register extends React.Component {
  pushPage() {
    console.log(this.props);
    // this.props.navigator.pushPage()
    this.props.navigator.pushPage({ comp: Tabs });
  }

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state1 = { value: '' };
  }

  render() {
    return (
      <Page>
        <Toolbar modifier={this.props.modifier}>
          <div className="left">
            <BackButton modifier={this.props.modifier} />
          </div>
          <div className="center text-center">Register</div>
        </Toolbar>
        <Row style={{ margin: '60px 8px 10px 16px' }}>
          <h1>Hello There!</h1>
        </Row>
        <div style={{ margin: '20px 6vw 5px 16px' }}>
          <Input
            name="email"
            style={{ width: '90vw', marginTop: '15px' }}
            value={this.state.text}
            float
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
            modifier="material"
            placeholder="Email"
          />
          <Input
            name="password"
            style={{ width: '90vw', marginTop: '50px' }}
            value={this.state1.text}
            float
            onChange={(event) => {
              this.setState1({ text: event.target.value });
            }}
            modifier="material"
            placeholder="Password"
          />
          <Button
            className="button--large"
            style={{ marginTop: '50px' }}
            onClick={this.pushPage.bind(this)}
          >
            Register
          </Button>
        </div>
      </Page>
    );
  }
}

class App extends React.Component {

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          comp: Onboarding,
          props: { key: 'onboarding' }
        }}
        renderPage={this.renderPage}
      />
    );
  }
}

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

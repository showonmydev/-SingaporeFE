import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import { signin } from 'redux/auth/actions';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from './FacebookLogin';

const Page = ({ children }) => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          {children}
        </div>
      </QueueAnim>
    </div>
  </div>
);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      password: '',
      email: '',
      touched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user && nextProps.user.get('email')
      && !this.props.user.get('email')) {
      if (nextProps.user.get('activated')) {
        hashHistory.push('/app/dashboard');
      }
    }
    if (nextProps.error !== this.props.error) {
      this.setState({ touched: false });
    }
  }

  onSignIn = (e) => {
    const { signin } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    signin({ network: 'cleanpowerpro', email, password });
  }

  onInputChange = field => event => this.setState({ [field]: event.target.value })

  responseFacebook = ({ accessToken, email, name }) => {
    const { signin } = this.props;
    signin({ network: 'facebook', token: accessToken, email, name });
  }

  responseGoogle = ({ w3: { U3, ig }, Zi: { access_token } }) => {
    const { signin } = this.props;
    signin({ network: 'google', token: access_token, email: U3, name: ig });
  }

  render() {
    const { email, password, touched } = this.state;
    const { error, requesting } = this.props;
    const errorMessage = touched ? error.get('message') : '';
    return (
      <Page>
        <div className={`body-inner loading-enabled ${requesting ? 'loading' : ''}`}>
          <div className="card bg-white">
            <div className="card-content">

              <section className="logo text-center">
                <h1><a href="#/">{this.state.brand}</a></h1>
              </section>
              {errorMessage ? <div className="alert alert-danger" key="error-message">{errorMessage}</div> : null}
              <form className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Email"
                      fullWidth
                      onChange={this.onInputChange('email')}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Password"
                      type="password"
                      fullWidth
                      onChange={this.onInputChange('password')}
                      value={password}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="card-action no-border text-right">
              <a href="#/" className="color-primary" onClick={this.onSignIn}>Login</a>
            </div>
            <div className="card-action">
              <FacebookLogin
                socialId="1496678100420436"
                language="en_US"
                scope="public_profile,email"
                responseHandler={this.responseFacebook}
                xfbml
                fields="id,email,name"
                version="v2.5"
                className="facebook-login"
                buttonText="Login With Facebook"
              />
              <span className="space" />
              <GoogleLogin
                socialId="136067790830-gist7af97894tj6pfrnacn6t13j3ni7l.apps.googleusercontent.com"
                className="google-login"
                scope="profile"
                responseHandler={this.responseGoogle}
                buttonText="Login With Google"
              />
            </div>
          </div>

          <div className="additional-info">
            <a href="#/sign-up">Sign up</a>
            <span className="divider-h" />
            <a href="#/forgot-password">Forgot your password?</a>
          </div>

        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  error: getErrorSelector('auth', 'user')(state),
  user: getDataSelector('auth', 'user')(state),
  requesting: getRequestingSelector('auth', 'user')(state),
});
const mapDispatchToProps = dispatch => ({
  signin: payload => dispatch(signin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

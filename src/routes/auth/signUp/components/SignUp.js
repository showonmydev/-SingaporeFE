import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fromJS } from 'immutable';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';
import { signup } from 'redux/auth/actions';

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

class SignUp extends React.Component {
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
      && !this.props.user.get('email') && !nextProps.user.get('activated')) {
      hashHistory.push('/sign-up/confirm-email');
    }
    if (nextProps.error !== this.props.error) {
      this.setState({ touched: true });
    }
  }

  onSignUp = (e) => {
    const { signup } = this.props;
    const { username, password, email } = this.state;
    e.preventDefault();
    signup({ username, password, email });
  }

  onInputChange = field => event => this.setState({ [field]: event.target.value })

  render() {
    const { username, email, password, touched } = this.state;
    const { error, requesting } = this.props;
    const errors = touched ? (error.get('errors') || fromJS({})) : fromJS({});
    const emailError = errors.getIn(['email', 'message']);
    const passwordError = errors.getIn(['password', 'message']);
    return (
      <Page>
        <div className={`body-inner loading-enabled ${requesting ? 'loading' : ''}`}>

          <div className="card bg-white">
            <div className="card-content">
              <section className="logo text-center">
                <h1><a href="#/">{this.state.brand}</a></h1>
              </section>

              <form className="form-horizontal">
                <fieldset>
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Email"
                      type="email"
                      fullWidth
                      onChange={this.onInputChange('email')}
                      value={email}
                    />
                    {emailError ? <div className="alert alert-danger" key="error-message">{emailError}</div> : null}
                  </div>
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Password"
                      type="password"
                      fullWidth
                      onChange={this.onInputChange('password')}
                      value={password}
                    />
                    {passwordError ? <div className="alert alert-danger" key="error-message">{passwordError}</div> : null}
                  </div>
                  <div className="divider" />
                  <div className="form-group">
                    <p className="text-small">By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></p>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="card-action no-border text-right">
              <a href="#/login" className="color-gray-light">Login</a>
              <a href="#/" className="color-primary" onClick={this.onSignUp}>Sign Up</a>
            </div>
          </div>

        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  error: getErrorSelector('auth', 'user')(state),
  requesting: getRequestingSelector('auth', 'user')(state),
  user: getDataSelector('auth', 'user')(state),
});
const mapDispatchToProps = dispatch => ({
  signup: payload => dispatch(signup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

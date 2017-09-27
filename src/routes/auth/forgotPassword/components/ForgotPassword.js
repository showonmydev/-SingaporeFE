import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { sendResetPasswordLink } from 'redux/auth/actions';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';

const Page = ({ children }) => (
  <div className="page-forgot">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          { children }
        </div>
      </QueueAnim>
    </div>
  </div>
);

class ForgotPassowrd extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      email: '',
      touched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetPassword !== this.props.resetPassword &&
      nextProps.resetPassword.get('success') && !this.props.resetPassword.get('success')) {
      hashHistory.push('/login');
    }
    if (nextProps.error !== this.props.error) {
      this.setState({ touched: false });
    }
  }

  onSendResetPasswordLink = (e) => {
    const { sendResetPasswordLink } = this.props;
    const { email } = this.state;
    e.preventDefault();
    sendResetPasswordLink(email);
  }

  onInputChange = field => event => this.setState({ [field]: event.target.value })

  render() {
    const { email, touched } = this.state;
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
              <form>
                <fieldset>
                  {errorMessage ? <div className="alert alert-danger" key="error-message">{errorMessage}</div> : null}
                  <div className="form-group">
                    <TextField
                      floatingLabelText="Email"
                      type="email"
                      fullWidth
                      onChange={this.onInputChange('email')}
                      value={email}
                    />
                    <div className="additional-info text-center text-small">
                      Enter your email address that you used to register. We'll send you an email with your username and a link to reset your password.
                   </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="card-action no-border text-right">
              <a href="#/" className="color-primary" onClick={this.onSendResetPasswordLink}>Reset</a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  error: getErrorSelector('auth', 'reset-password')(state),
  resetPassword: getDataSelector('auth', 'reset-password')(state),
  requesting: getRequestingSelector('auth', 'reset-password')(state),
});
const mapDispatchToProps = dispatch => ({
  sendResetPasswordLink: email => dispatch(sendResetPasswordLink(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassowrd);

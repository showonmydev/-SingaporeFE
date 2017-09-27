import React from 'react';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { resetPassword } from 'redux/auth/actions';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';

const Page = ({ children }) => (
  <div className="page-forgot">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          {children}
        </div>
      </QueueAnim>
    </div>
  </div>
);

class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,
      password: '',
      touched: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user &&
      nextProps.user.get('email') && !this.props.user.get('email')) {
      if (nextProps.user.get('activated')) {
        hashHistory.push('/app/dashboard');
      } else {
        hashHistory.push('/login');
      }
    }
    if (nextProps.error !== this.props.error) {
      this.setState({ touched: true });
    }
  }

  onResetPassword = (e) => {
    const { params: { token }, resetPassword } = this.props;
    const { password } = this.state;
    e.preventDefault();
    resetPassword({ token, password });
  }

  onInputChange = field => event => this.setState({ [field]: event.target.value })

  render() {
    const { password, touched } = this.state;
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
                      floatingLabelText="Password"
                      type="password"
                      fullWidth
                      onChange={this.onInputChange('password')}
                      value={password}
                    />
                    <div className="additional-info text-center text-small">
                      Enter new password.
                   </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="card-action no-border text-right">
              <a href="#/" className="color-primary" onClick={this.onResetPassword}>Reset</a>
            </div>
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
  resetPassword: payload => dispatch(resetPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';
import { signupVerify } from 'redux/auth/actions';

const Page = ({ children }) => (
  <div className="page-auth page-signup-verify">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          {children}
        </div>
      </QueueAnim>
    </div>
  </div>
);

class SignUpVerify extends React.Component {
  constructor() {
    super();
    this.state = {
      touched: false,
    };
  }

  componentWillMount() {
    const { params: { token }, signupVerify } = this.props;
    signupVerify(token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user && nextProps.user.get('activated')) {
      hashHistory.push('/app/dashboard');
    }
    if (nextProps.error !== this.props.error) {
      this.setState({ touched: true });
    }
  }

  render() {
    const { error, requesting } = this.props;
    const { touched } = this.state;
    const errorMessage = touched ? error.get('message') : '';
    return (
      <Page>
        <div className={`body-inner loading-enabled ${requesting ? 'loading' : ''}`}>
          <div className="card bg-color-white">
            <div className="card-content">
              <div className="logo text-center">
                <a>Signup Verification</a>
              </div>

              <div>
                <p className="confirm-mail-icon"><span className="material-icons">mail_outline</span></p>
                <p className="text-center text-small no-margin">
                  {errorMessage ? 'Error occured.' : 'Email is being verified now...'}
                  {errorMessage ? <div className="alert alert-danger" key="error-message">{errorMessage}</div> : null}
                </p>
              </div>

            </div>
          </div>
          <div className="additional-info">
            <span>Return to <a href="#/login">Login</a></span>
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
  signupVerify: token => dispatch(signupVerify(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpVerify);

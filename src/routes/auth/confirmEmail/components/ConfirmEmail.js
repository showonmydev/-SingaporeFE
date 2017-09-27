import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { getDataSelector } from 'redux/selectors';

const Page = ({ children }) => (
  <div className="page-auth page-confirm-email">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          {children}
        </div>
      </QueueAnim>
    </div>
  </div>
);

class ConfirmEmail extends React.Component {
  render() {
    const { user } = this.props;
    if (!user.get('email')) {
      hashHistory.push('/sign-up');
    }
    return (
      <Page>
        <div className="body-inner">
          <div className="card bg-color-white">
            <div className="card-content">
              <div className="logo text-center">
                <a >Confirm Email</a>
              </div>

              <div>
                <p className="confirm-mail-icon"><span className="material-icons">mail_outline</span></p>
                <p className="text-center text-small no-margin">
                  An email has been send to <strong>{user.get('email')}</strong>. Please check for an email from us and click on the included link to reset your password.
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
  user: getDataSelector('auth', 'user')(state),
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);

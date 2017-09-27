import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class GoogleLogin extends React.Component {

  componentDidMount() {
    const { socialId, scope } = this.props;
    ((d, s, id, callback) => {
      const gs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      const js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js';
      gs.parentNode.insertBefore(js, gs);
      js.onload = callback;
    })(document, 'script', 'google-platform', () => {
      gapi.load('auth2', () => {
        if (!gapi.auth2.getAuthInstance()) {
          gapi.auth2.init({
            client_id: socialId,
            fetch_basic_profile: true,
            scope
          });
        }
      });
    });
  }

  checkLoginState = (response) => {
    if (auth2.isSignedIn.get()) {
      const profile = auth2.currentUser.get().getBasicProfile();
    } else if (this.props.responseHandler) {
      this.props.responseHandler({status: response.status});
    }
  }

  clickHandler = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => this.props.responseHandler(googleUser));
  }

  render() {
    const {
      socialId, scope, responseHandler,
      children, buttonText, disabled
    } = this.props;

    return (
      <button
        className="btn btn-google-plus btn-raised btn-lg full-width"
        onClick={this.clickHandler}
        disabled={disabled}
      >
        {children}
        {buttonText}
      </button>
    );
  }
}

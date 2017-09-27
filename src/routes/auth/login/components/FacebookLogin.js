import React from 'react';

export default class FacebookLogin extends React.Component {

  componentDidMount() {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.socialId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version,
      });
    };
  }

  responseApi(authResponse) {
    FB.api('/me', { fields: this.props.fields }, (me) => {
      this.props.responseHandler({
        ...me,
        accessToken: authResponse.accessToken
      });
    });
  }

  checkLoginState(response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else if (this.props.responseHandler) {
      this.props.responseHandler({ status: response.status });
    }
  }

  clickHandler = () => {
    FB.getLoginStatus((response) => {
      if (response.status !== 'connected') {
        FB.login(this.checkLoginState.bind(this), { scope: this.props.scope });
      } else {
        this.checkLoginState(response);
      }
    });
  };

  render() {
    const {
      socialId, xfbml, cookie, version, language, fields, responseHandler,
      children, buttonText, disabled
    } = this.props;
    return (
      <button
        className="btn btn-facebook btn-raised btn-lg full-width"
        onClick={this.clickHandler}
        disabled={disabled}
      >
        {children}
        {buttonText}
      </button>
    );
  }
}

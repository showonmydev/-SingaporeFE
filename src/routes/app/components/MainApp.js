import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import Header from 'components/Header';
import Sidenav from 'components/Sidenav';
import Footer from 'components/Footer';
import Customizer from 'components/Customizer';
import { getDataSelector } from 'redux/selectors';

class MainApp extends React.Component {
  componentWillMount() {
    const { user } = this.props;
    if (!user.get('token') || !user.get('email') || !user.get('activated')) {
      hashHistory.push('/login');
    }
  }
  render() {
    const { children, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                {children}
              </div>
            </div>

            <Footer />
          </div>
        </section>

        <Customizer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getDataSelector('auth', 'user')(state),
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

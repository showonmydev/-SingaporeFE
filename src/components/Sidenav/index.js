import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';
import APPCONFIG from 'constants/Config';
import { getSelector } from 'redux/selectors';
import {
    toggleCollapsedNav
} from 'redux/ui/actions';
import SidenavContent from './SidenavContent';

class Sidebar extends React.Component {

  componentDidMount() {
    // AutoCloseMobileNav
    const $body = $('#body');

    if (APPCONFIG.AutoCloseMobileNav) {
      hashHistory.listen((location) => {
        setTimeout(() => {
          $body.removeClass('sidebar-mobile-open');
        }, 0);
      });
    }
  }

  onToggleCollapsedNav = (e) => {
    const val = !this.props.navCollapsed;
    const { handleToggleCollapsedNav } = this.props;
    handleToggleCollapsedNav(val);
  }

  render() {
    const { navCollapsed, colorOption } = this.props;
    let toggleIcon = null;
    if (navCollapsed) {
      toggleIcon = <i className="material-icons">radio_button_unchecked</i>;
    } else {
      toggleIcon = <i className="material-icons">radio_button_checked</i>;
    }

    return (
      <nav
        className={classnames('app-sidebar', {
          'bg-color-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
          'bg-color-dark': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) < 0 })}
            >
        <section
          className={classnames('sidebar-header', {
            'bg-color-dark': ['11', '31'].indexOf(colorOption) >= 0,
            'bg-color-light': colorOption === '21',
            'bg-color-primary': ['12', '22', '32'].indexOf(colorOption) >= 0,
            'bg-color-success': ['13', '23', '33'].indexOf(colorOption) >= 0,
            'bg-color-info': ['14', '24', '34'].indexOf(colorOption) >= 0,
            'bg-color-warning': ['15', '25', '35'].indexOf(colorOption) >= 0,
            'bg-color-danger': ['16', '26', '36'].indexOf(colorOption) >= 0 })}
                >
          <i className="nav-icon material-icons logo-img logo-react">power_settings_new</i>
          <Link to="/" className="brand" target="_blank">{APPCONFIG.brand}</Link>
          <a href="javascript:;" className="collapsednav-toggler" onClick={this.onToggleCollapsedNav}>
            {toggleIcon}
          </a>
        </section>

        <section className="sidebar-content">
          <SidenavContent />
        </section>

        <section className="sidebar-footer">
          <ul className="nav">
            <li>
              <a target="_blank" href="#/support">
                <i className="nav-icon material-icons">help</i>
                <span className="nav-text"><span>Help</span> & <span>Support</span></span>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  navCollapsed: getSelector('ui', 'navCollapsed')(state),
  colorOption: getSelector('ui', 'colorOption')(state)
});
const mapDispatchToProps = dispatch => ({
  handleToggleCollapsedNav: (navCollapsed) => {
    dispatch(toggleCollapsedNav(navCollapsed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

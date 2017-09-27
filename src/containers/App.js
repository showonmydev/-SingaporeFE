import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { getSelector } from 'redux/selectors';

// = styles =
// 3rd
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import grayTheme from './themes/grayTheme';


injectTapEventPlugin(); // Needed for onTouchTap for Material UI


class App extends Component {
  componentDidMount() {}

  render() {
    const { layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth, theme } = this.props;
    let materialUITheme;
    switch (theme) {
      case 'gray':
        materialUITheme = grayTheme;
        break;
      case 'dark':
        materialUITheme = darkTheme;
        break;
      default:
        materialUITheme = lightTheme;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
        <div id="app-inner">
          <div className="preloaderbar hide"><span className="bar" /></div>
          <div
            className={classnames('app-main full-height', {
              'fixed-header': fixedHeader,
              'nav-collapsed': navCollapsed,
              'nav-behind': navBehind,
              'layout-boxed': layoutBoxed,
              'theme-gray': theme === 'gray',
              'theme-dark': theme === 'dark',
              'sidebar-sm': sidebarWidth === 'small',
              'sidebar-lg': sidebarWidth === 'large'})
                    }>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layoutBoxed: getSelector('ui', 'layoutBoxed')(state),
  navCollapsed: getSelector('ui', 'navCollapsed')(state),
  navBehind: getSelector('ui', 'navBehind')(state),
  fixedHeader: getSelector('ui', 'fixedHeader')(state),
  sidebarWidth: getSelector('ui', 'sidebarWidth')(state),
  theme: getSelector('ui', 'theme')(state),
});

export default connect(mapStateToProps)(App);

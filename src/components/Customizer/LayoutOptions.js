import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  toggleBoxedLayout,
  toggleCollapsedNav,
  toggleNavBehind,
  toggleFixedHeader,
  changeSidebarWidth
} from 'redux/ui/actions';
import { getSelector } from 'redux/selectors';

const sideWidthSelectStyle = {
  fontSize: '14px',
  width: '100%',
  marginTop: '-15px'
};

class LayoutOptions extends React.Component {

  onToggleFixedHeader = (e, val) => {
    const { handleToggleFixedHeader } = this.props;
    handleToggleFixedHeader(val);
  }

  onToggleCollapsedNav = (e, val) => {
    const { handleToggleCollapsedNav } = this.props;
    handleToggleCollapsedNav(val);
  }

  onToggleNavBehind = (e, val) => {
    const { handleToggleNavBehind } = this.props;
    handleToggleNavBehind(val);
  }

  onToggleBoxedLayout = (e, val) => {
    const { handleToggleBoxedLayout } = this.props;
    handleToggleBoxedLayout(val);
  }

  render() {
    const { layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth } = this.props;

    return (
      <section className="customizer-layout-options">
        <h4 className="section-header">Layout Options</h4>
        <div className="divider" />

        <div>
          <Toggle label="Fixed Header" defaultToggled={fixedHeader} onToggle={this.onToggleFixedHeader} />
          <div className="divider divider-xs" />
          <Toggle label="Collapsed Sidebar" toggled={navCollapsed} onToggle={this.onToggleCollapsedNav} />
          <div className="divider divider-xs" />
          <Toggle label="Full Width Header" defaultToggled={navBehind} onToggle={this.onToggleNavBehind} />
          <div className="divider divider-xs" />
          <Toggle label="Boxed Layout" defaultToggled={layoutBoxed} onToggle={this.onToggleBoxedLayout} />
          <div className="divider divider-xs" />
        </div>

      </section>
    );
  }
}

const mapStateToProps = state => ({
  layoutBoxed: getSelector('ui', 'layoutBoxed')(state),
  navCollapsed: getSelector('ui', 'navCollapsed')(state),
  navBehind: getSelector('ui', 'navBehind')(state),
  fixedHeader: getSelector('ui', 'fixedHeader')(state),
  sidebarWidth: getSelector('ui', 'sidebarWidth')(state)
});
const mapDispatchToProps = dispatch => ({
  handleToggleFixedHeader: (fixedHeader) => {
    dispatch(toggleFixedHeader(fixedHeader));
  },
  handleToggleCollapsedNav: (navCollapsed) => {
    dispatch(toggleCollapsedNav(navCollapsed));
  },
  handleToggleNavBehind: (navBehind) => {
    dispatch(toggleNavBehind(navBehind));
  },
  handleToggleBoxedLayout: (layoutBoxed) => {
    dispatch(toggleBoxedLayout(layoutBoxed));
  },
  handleSidebarWidthChange: (sidebarWidth) => {
    dispatch(changeSidebarWidth(sidebarWidth));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutOptions);

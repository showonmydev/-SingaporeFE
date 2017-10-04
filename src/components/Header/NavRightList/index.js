import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { connect } from 'react-redux';
import { signout } from 'redux/auth/actions';
import { getErrorSelector, getDataSelector, getRequestingSelector } from 'redux/selectors';
import { Link, hashHistory } from 'react-router';
import 'html5-desktop-notifications';
import styles from './styles';

const apps = [
  { title: 'Inbox', icon: 'message', color: '#aa8838', to: 'app/messages' },
  { title: 'Analytics', icon: 'insert_chart', color: '#008888', to: 'app/stats' },
  { title: 'CRM', icon: 'call', color: '#33aa33', to: 'app/call' },
  { title: 'Projects', icon: 'web_asset', color: '#3333aa', to: 'app/tools/salesdb' },
  { title: 'Apps', icon: 'devices', color: '#ff6600', to: 'app/tools/mobileapp' },
  { title: 'Market', icon: 'library_books', color: '#8080ff', to: 'app/tools/resources' },
  { title: 'Templetes', icon: 'blur_on', color: '#88ff00', to: 'app/tools/reporting' },
  { title: 'Timeline', icon: 'access_time', color: '#77ffff', to: 'app/training/timeline' },
];

const notifications = [
  { title: 'New Message', icon: 'message', color: '#aa8838', by: 'Mr. XYZ' },
  { title: 'New Message1', icon: 'message', color: '#aa8838', by: 'Mr. XYZ' },
  { title: 'New Message2', icon: 'message', color: '#aa8838', by: 'Mr. XYZ' },
  { title: 'New Message3', icon: 'message', color: '#aa8838', by: 'Mr. XYZ' },
  { title: 'New Message4', icon: 'message', color: '#aa8838', by: 'Mr. XYZ' },
];

const profileLinks = [
  { title: 'Profile', icon: 'fingerprint', color: '#888885', to: 'app/Profile' },
  { title: 'Account', icon: 'account_circle', color: '#888885', to: 'app/account' },
  { title: 'Teams', icon: 'people', color: '#888885', to: 'app/teams' },
  { title: 'Settings', icon: 'settings', color: '#888885', to: 'app/settings' },
  { title: 'Integrations', icon: 'headset_mic', color: '#888885', to: 'app/integrations' },
];

class NavRightList extends React.Component {

  state = { notification: 0 };

  componentDidMount = () => {
    const permissionLevel = notify.permissionLevel();
    notify.config({ pageVisibility: true, autoClose: 2000 });
    switch (permissionLevel) {
      case notify.PERMISSION_DEFAULT:
        notify.requestPermission(this.runTestNotification);
        break;
      default:
        break;
    }
    this.runTestNotification();
  }

  onLogout = () => {
    const { signout } = this.props;
    signout();
    hashHistory.push('/login');
  }

  runTestNotification = () => {
    setTimeout(() => {
      notify.createNotification('System Notifications', {
        body: 'This is a System Notifications',
        icon: 'test',
      });
      this.setState({ notification: 1 });
    }, 7000);
  }

  render() {
    const { user } = this.props;
    const { notification } = this.state;
    const userName = user.get('name') || user.get('email');
    return (
      <ul className="list-unstyled float-right">
      	<li>
          <IconButton
            style={styles.imgIconButton}
            className="md-button header-btn">
            <a href="#/app/training/upload"><i className="nav-icon material-icons">file_upload</i></a>
          </IconButton>
        </li>
        <li>
        <IconMenu
            iconButtonElement={
              <IconButton
                style={styles.imgIconButton}
                className="md-button header-btn">
                <i className="material-icons">apps</i>
              </IconButton>
            }
            onChange={this.handleChange}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            menuStyle={styles.appMenu}
          >
            {
              apps.map((app, index) => (
                <MenuItem
                  primaryText={app.title}
                  style={{ ...styles.appMenuItem, left: `calc(${33.33 * (index % 3)}% + ${30 - ((index % 3) * 20)}px)`, top: `${(100 * parseInt(index / 3, 10)) + 20}px` }}
                  innerDivStyle={styles.appMenuItemInner}
                  leftIcon={
                    <i className="material-icons" style={{ ...styles.appMenuItemIcon, color: app.color }}>
                      {app.icon}
                    </i>
                  }
                  key={index}
                  onClick={() => hashHistory.push(app.to)}
                />
              ))
            }
          </IconMenu>
        </li>
        <li>
          <IconMenu
            iconButtonElement={
              <IconButton
                className="md-button header-btn">
                <i className="material-icons">{notification ? 'notifications' : 'notifications_none'}</i>
              </IconButton>
            }
            onChange={this.handleChange}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            menuStyle={styles.appNotification}
          >
            {
              notifications.map((notifications, index) => (
                <MenuItem
                      primaryText={notifications.title +" by "+ notifications.by}
                      style={styles.profileLink}
                      innerDivStyle={styles.appNotificationInner}
                      key={index}
                    />
              ))
            }
          </IconMenu>
        </li>
        <li style={{marginRight: '10px'}}>
          <IconMenu
            iconButtonElement={
              <IconButton style={styles.imgIconButton}>
                <img src={user.get('avatar') || 'assets/images/no-avatar.jpg'} alt="" className="rounded-circle img30_30" />
              </IconButton>
            }
            onChange={this.handleChange}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            menuStyle={styles.profileMenu}
          >
            <div style={styles.profileMenuInnerContainer}>
              <div style={styles.profileMenuTop}>
                Please review the <Link to="/policy">CleanPower.Pro Privacy Policy.</Link>
              </div>
              <div style={styles.mainProfile}>
                <div style={styles.mainProfileAvatarWrapper}>
                  <img
                    src={user.get('avatar') || 'assets/images/no-avatar.jpg'}
                    alt=""
                    className="rounded-circle img96_96"
                  />
                  <div style={styles.mainProfileAvatarChange}>Change</div>
                </div>
                <div>
                  <strong>{user.get('name', 'Unnamed')}</strong>
                  <p>{user.get('email')}</p>
                  <Link to="/app/profile">My Profile</Link>
                </div>
              </div>
              <div>
                {
                  profileLinks.map(({ to, title, icon, color }, index) => (
                    <MenuItem
                      primaryText={title}
                      style={styles.profileLink}
                      innerDivStyle={styles.listItem}
                      leftIcon={<i className="material-icons" style={{ ...styles.profileLinkIcon, color }}>{icon}</i>}
                      key={index}
                      onClick={() => hashHistory.push(to)}
                    />
                  ))
                }
              </div>
              <div style={styles.footer}>
                <MenuItem
                  primaryText="Log Out"
                  innerDivStyle={styles.listItem}
                  style={styles.logOut}
                  onClick={this.onLogout}
                />
              </div>
            </div>
          </IconMenu>
        </li>
      </ul>
    );
  }
}

NavRightList.defaultProps = {
  userName: ''
};

const mapStateToProps = state => ({
  user: getDataSelector('auth', 'user')(state),
});
const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavRightList);

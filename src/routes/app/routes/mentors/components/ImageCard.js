import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';

const cardActionStyle = {
  padding: '5px 20px',
  textAlign: 'right'
};

const ulStyle = {
  marginBottom: 0
};

const HeaderIconButtonStyle = {
  width: '48px',
  height: '48px'
};

class ImageCardWithProfile extends React.Component {
  render() {
    const iconButtonElement = (
      <IconButton
        style={HeaderIconButtonStyle}
        className="md-button header-btn">
        <i className="material-icons">more_vert</i>
        <span className="badge">3</span>
      </IconButton>
    );

    return (
      <div className="col-xl-4">
        <div className="card card-white">
          <div className="card-image">
            <img src={this.props.userData.backImgUrl} alt="" />
            <span className="card-title">{this.props.userData.name}</span>
          </div>
          <div className="card-content">
            <a className="card-profile-img float-right" href="javascript:;"><img src={this.props.userData.userImgUrl} alt="" /></a>
            <p>{this.props.userData.description}</p>
          </div>
          <div className="card-action" style={cardActionStyle}>
            <ul className="list-unstyled list-inline" style={ulStyle}>
              <li className="list-inline-item">
                <IconButton
                  style={HeaderIconButtonStyle}
                  className="md-button header-btn">
                  <i className="material-icons">notifications_none</i>
                </IconButton>
              </li>
              <li className="list-inline-item">
                <IconButton
                  style={HeaderIconButtonStyle}
                  className="md-button header-btn">
                  <i className="material-icons">mode_comment</i>
                </IconButton>
              </li>
              <li className="list-inline-item">
                <IconMenu
                  iconButtonElement={iconButtonElement}
                  onChange={this.handleChange}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  menuStyle={{minWidth: '250px'}}
                >
                  <MenuItem
                    className="header-icon-dropdown-item"
                    leftIcon={<i className="material-icons">delete</i>}
                    primaryText="Remove Mentor"
                  />
                </IconMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCardWithProfile;

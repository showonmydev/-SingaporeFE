import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import { hashHistory } from 'react-router';
import Divider from 'material-ui/Divider';

const HeaderIconButtonStyle = {
  width: '60px',
  height: '60px'
};

const listItemStyle = {
  paddingLeft: '40px' // 36 + 16, algin with sub list
};

class NavLeftList extends React.Component {

  handleChange = (event, value) => {
    hashHistory.push(value);
  }

  render() {
    /* example item
      <li className="list-inline-item">
          <IconButton
            style={HeaderIconButtonStyle}
            className="md-button header-btn">
            <i className="material-icons">notifications_none</i>
          </IconButton>
        </li>
    */
    return (
      <ul className="list-unstyled list-inline" />
    );
  }
}

export default NavLeftList;

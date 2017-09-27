import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const menuItems = [
  'All Broadcasts',
  'All Voice',
  'All Text',
  'Complete Voice',
  'Complete Text',
  'Active Voice',
  'Active Text'
];

export class CustomizedToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            {
              this.props.menuItems.map((item, idx) => (<MenuItem key={`menu-${idx}`} value={idx} primaryText={item} />))
            }
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Create Broadcast" primary />
          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <NavigationExpandMoreIcon />
              </IconButton>
                        }
                    >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const ToolbarSection = () => (
  <article className="article">
    <h2 className="article-title">Material Toolbar</h2>
    <div className="box box-default">
      <div className="box-body padding-xl">
        <CustomizedToolbar menuItems={menuItems} />
      </div>
    </div>
  </article>
    );


export default ToolbarSection;

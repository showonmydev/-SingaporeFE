import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QueueAnim from 'rc-queue-anim';
import { CustomizedToolbar } from '../../ui/routes/components/components/Toolbar';

const menuItems = [
  'All Broadcasts',
  'All Voice',
  'All Text',
  'Complete Voice',
  'Complete Text',
  'Active Voice',
  'Active Text'
];

const sectionCollapsedStyle = {
  padding: '25px 0 0'
};

const HeroWithSearchBar = ({isCollapsed}) => (
  <article className="article">
    <section className="hero" style={isCollapsed ? sectionCollapsedStyle : {}}>
      {
        !isCollapsed && [
          <div className="hero-content" key="hero-content">
            <h1 className="hero-title">Have a question or update for your whole team?</h1>
          </div>,
          <p className="hero-tagline" key="hero-tagline">Posts entered here will be sent to all team members and their feeds.</p>
        ]
      }
      <CustomizedToolbar menuItems={menuItems} />
    </section>
  </article>
);

export default HeroWithSearchBar;
